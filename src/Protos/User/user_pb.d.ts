// package: userservice
// file: src/Protos/User/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getName(): string;
    setName(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getPassword(): string;
    setPassword(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        name: string,
        email: string,
        password: string,
    }
}

export class UserResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): UserResponse;
    getMessage(): string;
    setMessage(value: string): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        id: string,
        message: string,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class AuthUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): AuthUserRequest;
    getPassword(): string;
    setPassword(value: string): AuthUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthUserRequest): AuthUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthUserRequest;
    static deserializeBinaryFromReader(message: AuthUserRequest, reader: jspb.BinaryReader): AuthUserRequest;
}

export namespace AuthUserRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class AuthUserResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): AuthUserResponse;
    getMessage(): string;
    setMessage(value: string): AuthUserResponse;

    hasAccessToken(): boolean;
    clearAccessToken(): void;
    getAccessToken(): string | undefined;
    setAccessToken(value: string): AuthUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthUserResponse): AuthUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthUserResponse;
    static deserializeBinaryFromReader(message: AuthUserResponse, reader: jspb.BinaryReader): AuthUserResponse;
}

export namespace AuthUserResponse {
    export type AsObject = {
        status: boolean,
        message: string,
        accessToken?: string,
    }
}
