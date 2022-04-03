import "dotenv/config";
import grpc from "grpc";
import "reflect-metadata";
import {
  IUserServiceServer,
  UserServiceService,
} from "./Protos/User/user_grpc_pb";
import UserService from "./Services/UsersService";

const server = new grpc.Server();
server.addService<IUserServiceServer>(UserServiceService, new UserService());

server.bindAsync(
  `0.0.0.0:${process.env.APP_PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    server.start();
    console.log(`Server is runing => localhost:${process.env.APP_PORT}`);
  }
);
