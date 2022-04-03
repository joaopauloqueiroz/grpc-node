// package: productservice
// file: src/Protos/Products/product.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_Protos_Products_product_pb from "../../../src/Protos/Products/product_pb";

interface IProdcutServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createProduct: IProdcutServiceService_ICreateProduct;
    getProduct: IProdcutServiceService_IGetProduct;
    getAllProducts: IProdcutServiceService_IGetAllProducts;
}

interface IProdcutServiceService_ICreateProduct extends grpc.MethodDefinition<src_Protos_Products_product_pb.ProductRequest, src_Protos_Products_product_pb.ProductResponse> {
    path: "/productservice.ProdcutService/CreateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_Protos_Products_product_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<src_Protos_Products_product_pb.ProductRequest>;
    responseSerialize: grpc.serialize<src_Protos_Products_product_pb.ProductResponse>;
    responseDeserialize: grpc.deserialize<src_Protos_Products_product_pb.ProductResponse>;
}
interface IProdcutServiceService_IGetProduct extends grpc.MethodDefinition<src_Protos_Products_product_pb.GetById, src_Protos_Products_product_pb.ProductResponse> {
    path: "/productservice.ProdcutService/GetProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_Protos_Products_product_pb.GetById>;
    requestDeserialize: grpc.deserialize<src_Protos_Products_product_pb.GetById>;
    responseSerialize: grpc.serialize<src_Protos_Products_product_pb.ProductResponse>;
    responseDeserialize: grpc.deserialize<src_Protos_Products_product_pb.ProductResponse>;
}
interface IProdcutServiceService_IGetAllProducts extends grpc.MethodDefinition<src_Protos_Products_product_pb.Empty, src_Protos_Products_product_pb.ProductListResponse> {
    path: "/productservice.ProdcutService/GetAllProducts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_Protos_Products_product_pb.Empty>;
    requestDeserialize: grpc.deserialize<src_Protos_Products_product_pb.Empty>;
    responseSerialize: grpc.serialize<src_Protos_Products_product_pb.ProductListResponse>;
    responseDeserialize: grpc.deserialize<src_Protos_Products_product_pb.ProductListResponse>;
}

export const ProdcutServiceService: IProdcutServiceService;

export interface IProdcutServiceServer {
    createProduct: grpc.handleUnaryCall<src_Protos_Products_product_pb.ProductRequest, src_Protos_Products_product_pb.ProductResponse>;
    getProduct: grpc.handleUnaryCall<src_Protos_Products_product_pb.GetById, src_Protos_Products_product_pb.ProductResponse>;
    getAllProducts: grpc.handleUnaryCall<src_Protos_Products_product_pb.Empty, src_Protos_Products_product_pb.ProductListResponse>;
}

export interface IProdcutServiceClient {
    createProduct(request: src_Protos_Products_product_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    createProduct(request: src_Protos_Products_product_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    createProduct(request: src_Protos_Products_product_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    getProduct(request: src_Protos_Products_product_pb.GetById, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    getProduct(request: src_Protos_Products_product_pb.GetById, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    getProduct(request: src_Protos_Products_product_pb.GetById, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    getAllProducts(request: src_Protos_Products_product_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    getAllProducts(request: src_Protos_Products_product_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    getAllProducts(request: src_Protos_Products_product_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
}

export class ProdcutServiceClient extends grpc.Client implements IProdcutServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createProduct(request: src_Protos_Products_product_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public createProduct(request: src_Protos_Products_product_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public createProduct(request: src_Protos_Products_product_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public getProduct(request: src_Protos_Products_product_pb.GetById, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public getProduct(request: src_Protos_Products_product_pb.GetById, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public getProduct(request: src_Protos_Products_product_pb.GetById, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public getAllProducts(request: src_Protos_Products_product_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    public getAllProducts(request: src_Protos_Products_product_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    public getAllProducts(request: src_Protos_Products_product_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_Protos_Products_product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
}
