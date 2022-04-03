// package: userservice
// file: src/Protos/User/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_Protos_User_user_pb from "../../../src/Protos/User/user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUserServiceService_ICreateUser;
    authUser: IUserServiceService_IAuthUser;
}

interface IUserServiceService_ICreateUser extends grpc.MethodDefinition<src_Protos_User_user_pb.User, src_Protos_User_user_pb.UserResponse> {
    path: "/userservice.UserService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_Protos_User_user_pb.User>;
    requestDeserialize: grpc.deserialize<src_Protos_User_user_pb.User>;
    responseSerialize: grpc.serialize<src_Protos_User_user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<src_Protos_User_user_pb.UserResponse>;
}
interface IUserServiceService_IAuthUser extends grpc.MethodDefinition<src_Protos_User_user_pb.AuthUserRequest, src_Protos_User_user_pb.AuthUserResponse> {
    path: "/userservice.UserService/AuthUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_Protos_User_user_pb.AuthUserRequest>;
    requestDeserialize: grpc.deserialize<src_Protos_User_user_pb.AuthUserRequest>;
    responseSerialize: grpc.serialize<src_Protos_User_user_pb.AuthUserResponse>;
    responseDeserialize: grpc.deserialize<src_Protos_User_user_pb.AuthUserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    createUser: grpc.handleUnaryCall<src_Protos_User_user_pb.User, src_Protos_User_user_pb.UserResponse>;
    authUser: grpc.handleUnaryCall<src_Protos_User_user_pb.AuthUserRequest, src_Protos_User_user_pb.AuthUserResponse>;
}

export interface IUserServiceClient {
    createUser(request: src_Protos_User_user_pb.User, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: src_Protos_User_user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: src_Protos_User_user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    authUser(request: src_Protos_User_user_pb.AuthUserRequest, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
    authUser(request: src_Protos_User_user_pb.AuthUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
    authUser(request: src_Protos_User_user_pb.AuthUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: src_Protos_User_user_pb.User, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: src_Protos_User_user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: src_Protos_User_user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public authUser(request: src_Protos_User_user_pb.AuthUserRequest, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
    public authUser(request: src_Protos_User_user_pb.AuthUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
    public authUser(request: src_Protos_User_user_pb.AuthUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_Protos_User_user_pb.AuthUserResponse) => void): grpc.ClientUnaryCall;
}
