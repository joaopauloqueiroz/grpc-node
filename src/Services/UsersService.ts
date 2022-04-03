import { PrismaClient } from "@prisma/client";
import { sendUnaryData, ServerUnaryCall } from "grpc";
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
        throw error;
      });
  }

  public async authUser(
    call: ServerUnaryCall<AuthUserRequest>,
    callback: sendUnaryData<AuthUserResponse>
  ): Promise<void> {
    const { email, password } = call.request.toObject();
    const user = await this.prismaClient.user.findFirst({ where: { email } });
    if (user) {
      const isAuthenticated = await this.authService.validatePassword(
        password,
        user.password as string
      );

      const userAuth = new AuthUserResponse();
      userAuth.setStatus(isAuthenticated);
      userAuth.setMessage(
        isAuthenticated
          ? "Usuario autenticado com sucesso"
          : "Email ou senha inválidos"
      );
      callback(null, userAuth);
    }
  }
}
