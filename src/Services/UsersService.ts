import { PrismaClient } from "@prisma/client";
import { sendUnaryData, ServerUnaryCall } from "grpc";
import {
  ERROR_ON_CREATE_USER,
  USER_AUTHENTICATED,
  USER_NOT_AUTHENTICATED,
  USER_NOT_FOUND,
} from "../Config/consts";
import AuthService from "../plugins/auth";
import { IUserServiceServer } from "../Protos/User/user_grpc_pb";
import {
  AuthUserRequest,
  AuthUserResponse,
  User,
  UserResponse,
} from "../Protos/User/user_pb";

export default class UserService implements IUserServiceServer {
  private readonly prismaClient = new PrismaClient();
  private readonly authService = new AuthService();

  public async createUser(
    call: ServerUnaryCall<User>,
    callback: sendUnaryData<UserResponse>
  ): Promise<void> {
    const { password } = call.request.toObject();
    this.prismaClient.user
      .create({
        data: {
          ...call.request.toObject(),
          password: await this.authService.generatePassword(password),
        },
      })
      .then((res) => {
        const userCreated = new UserResponse();
        userCreated.setId(res.id);
        userCreated.setMessage("Usuario criado com sucesso");
        return callback(null, userCreated);
      })
      .catch((error) => {
        return callback(
          {
            message: ERROR_ON_CREATE_USER,
            code: error.statusCode,
            name: error.message,
          },
          null
        );
      });
  }

  public async authUser(
    call: ServerUnaryCall<AuthUserRequest>,
    callback: sendUnaryData<AuthUserResponse>
  ): Promise<void> {
    try {
      const { email, password } = call.request.toObject();
      const user = await this.prismaClient.user.findFirst({ where: { email } });
      if (user) {
        const isAuthenticated = await this.authService.validatePassword(
          password,
          user.password as string
        );

        const userAuth = new AuthUserResponse();
        userAuth.setStatus(isAuthenticated);
        if (!isAuthenticated) {
          userAuth.setMessage(USER_NOT_AUTHENTICATED);
          return callback(
            {
              message: USER_NOT_AUTHENTICATED,
              code: 401,
              name: "Error on auth user",
            },
            userAuth
          );
        }
        const accessToken = await this.authService.generateToken(user);
        userAuth.setMessage(USER_AUTHENTICATED);
        userAuth.setAccessToken(accessToken);
        console.log(userAuth.toObject());
        return callback(null, userAuth);
      } else {
        return callback(
          { message: USER_NOT_FOUND, code: 400, name: "User error" },
          null
        );
      }
    } catch (error) {
      callback(
        {
          message: error.message,
          code: error.statusCode,
          name: "User error",
        },
        null
      );
    }
  }
}
