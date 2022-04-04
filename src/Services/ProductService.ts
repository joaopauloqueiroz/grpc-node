import { handleUnaryCall } from "grpc";
import { IProdcutServiceServer } from "src/Protos/Products/product_grpc_pb";
import {
  Empty,
  GetById,
  ProductListResponse,
  ProductRequest,
  ProductResponse,
} from "src/Protos/Products/product_pb";

export default class ProductService implements IProdcutServiceServer {
  createProduct: handleUnaryCall<ProductRequest, ProductResponse>;
  getProduct: handleUnaryCall<GetById, ProductResponse>;
  getAllProducts: handleUnaryCall<Empty, ProductListResponse>;
}
