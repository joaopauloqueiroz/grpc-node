// package: productservice
// file: src/Protos/Products/product.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ProductRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ProductRequest;
    getName(): string;
    setName(value: string): ProductRequest;
    getDescription(): string;
    setDescription(value: string): ProductRequest;
    getPrice(): number;
    setPrice(value: number): ProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProductRequest): ProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductRequest;
    static deserializeBinaryFromReader(message: ProductRequest, reader: jspb.BinaryReader): ProductRequest;
}

export namespace ProductRequest {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        price: number,
    }
}

export class ProductResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): ProductResponse;
    getName(): string;
    setName(value: string): ProductResponse;
    getDescription(): string;
    setDescription(value: string): ProductResponse;
    getPrice(): number;
    setPrice(value: number): ProductResponse;
    getCreatedat(): string;
    setCreatedat(value: string): ProductResponse;
    getUpdatedat(): string;
    setUpdatedat(value: string): ProductResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProductResponse): ProductResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductResponse;
    static deserializeBinaryFromReader(message: ProductResponse, reader: jspb.BinaryReader): ProductResponse;
}

export namespace ProductResponse {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        price: number,
        createdat: string,
        updatedat: string,
    }
}

export class GetById extends jspb.Message { 
    getId(): string;
    setId(value: string): GetById;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetById.AsObject;
    static toObject(includeInstance: boolean, msg: GetById): GetById.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetById, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetById;
    static deserializeBinaryFromReader(message: GetById, reader: jspb.BinaryReader): GetById;
}

export namespace GetById {
    export type AsObject = {
        id: string,
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

export class ProductListResponse extends jspb.Message { 
    clearProductsList(): void;
    getProductsList(): Array<ProductResponse>;
    setProductsList(value: Array<ProductResponse>): ProductListResponse;
    addProducts(value?: ProductResponse, index?: number): ProductResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProductListResponse): ProductListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductListResponse;
    static deserializeBinaryFromReader(message: ProductListResponse, reader: jspb.BinaryReader): ProductListResponse;
}

export namespace ProductListResponse {
    export type AsObject = {
        productsList: Array<ProductResponse.AsObject>,
    }
}
