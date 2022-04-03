// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_Protos_User_user_pb = require('../../../src/Protos/User/user_pb.js');

function serialize_userservice_AuthUserRequest(arg) {
  if (!(arg instanceof src_Protos_User_user_pb.AuthUserRequest)) {
    throw new Error('Expected argument of type userservice.AuthUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_AuthUserRequest(buffer_arg) {
  return src_Protos_User_user_pb.AuthUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userservice_AuthUserResponse(arg) {
  if (!(arg instanceof src_Protos_User_user_pb.AuthUserResponse)) {
    throw new Error('Expected argument of type userservice.AuthUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_AuthUserResponse(buffer_arg) {
  return src_Protos_User_user_pb.AuthUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userservice_User(arg) {
  if (!(arg instanceof src_Protos_User_user_pb.User)) {
    throw new Error('Expected argument of type userservice.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_User(buffer_arg) {
  return src_Protos_User_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userservice_UserResponse(arg) {
  if (!(arg instanceof src_Protos_User_user_pb.UserResponse)) {
    throw new Error('Expected argument of type userservice.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userservice_UserResponse(buffer_arg) {
  return src_Protos_User_user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  createUser: {
    path: '/userservice.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: src_Protos_User_user_pb.User,
    responseType: src_Protos_User_user_pb.UserResponse,
    requestSerialize: serialize_userservice_User,
    requestDeserialize: deserialize_userservice_User,
    responseSerialize: serialize_userservice_UserResponse,
    responseDeserialize: deserialize_userservice_UserResponse,
  },
  authUser: {
    path: '/userservice.UserService/AuthUser',
    requestStream: false,
    responseStream: false,
    requestType: src_Protos_User_user_pb.AuthUserRequest,
    responseType: src_Protos_User_user_pb.AuthUserResponse,
    requestSerialize: serialize_userservice_AuthUserRequest,
    requestDeserialize: deserialize_userservice_AuthUserRequest,
    responseSerialize: serialize_userservice_AuthUserResponse,
    responseDeserialize: deserialize_userservice_AuthUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
