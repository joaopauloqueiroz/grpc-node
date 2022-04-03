// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_Protos_Products_product_pb = require('../../../src/Protos/Products/product_pb.js');

function serialize_productservice_Empty(arg) {
  if (!(arg instanceof src_Protos_Products_product_pb.Empty)) {
    throw new Error('Expected argument of type productservice.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_productservice_Empty(buffer_arg) {
  return src_Protos_Products_product_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_productservice_GetById(arg) {
  if (!(arg instanceof src_Protos_Products_product_pb.GetById)) {
    throw new Error('Expected argument of type productservice.GetById');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_productservice_GetById(buffer_arg) {
  return src_Protos_Products_product_pb.GetById.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_productservice_ProductListResponse(arg) {
  if (!(arg instanceof src_Protos_Products_product_pb.ProductListResponse)) {
    throw new Error('Expected argument of type productservice.ProductListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_productservice_ProductListResponse(buffer_arg) {
  return src_Protos_Products_product_pb.ProductListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_productservice_ProductRequest(arg) {
  if (!(arg instanceof src_Protos_Products_product_pb.ProductRequest)) {
    throw new Error('Expected argument of type productservice.ProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_productservice_ProductRequest(buffer_arg) {
  return src_Protos_Products_product_pb.ProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_productservice_ProductResponse(arg) {
  if (!(arg instanceof src_Protos_Products_product_pb.ProductResponse)) {
    throw new Error('Expected argument of type productservice.ProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_productservice_ProductResponse(buffer_arg) {
  return src_Protos_Products_product_pb.ProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProdcutServiceService = exports.ProdcutServiceService = {
  createProduct: {
    path: '/productservice.ProdcutService/CreateProduct',
    requestStream: false,
    responseStream: false,
    requestType: src_Protos_Products_product_pb.ProductRequest,
    responseType: src_Protos_Products_product_pb.ProductResponse,
    requestSerialize: serialize_productservice_ProductRequest,
    requestDeserialize: deserialize_productservice_ProductRequest,
    responseSerialize: serialize_productservice_ProductResponse,
    responseDeserialize: deserialize_productservice_ProductResponse,
  },
  getProduct: {
    path: '/productservice.ProdcutService/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: src_Protos_Products_product_pb.GetById,
    responseType: src_Protos_Products_product_pb.ProductResponse,
    requestSerialize: serialize_productservice_GetById,
    requestDeserialize: deserialize_productservice_GetById,
    responseSerialize: serialize_productservice_ProductResponse,
    responseDeserialize: deserialize_productservice_ProductResponse,
  },
  getAllProducts: {
    path: '/productservice.ProdcutService/GetAllProducts',
    requestStream: false,
    responseStream: false,
    requestType: src_Protos_Products_product_pb.Empty,
    responseType: src_Protos_Products_product_pb.ProductListResponse,
    requestSerialize: serialize_productservice_Empty,
    requestDeserialize: deserialize_productservice_Empty,
    responseSerialize: serialize_productservice_ProductListResponse,
    responseDeserialize: deserialize_productservice_ProductListResponse,
  },
};

exports.ProdcutServiceClient = grpc.makeGenericClientConstructor(ProdcutServiceService);
