// import { Router } from "express";
import {
  addProducts,
  fetchAllProducts,
  fetchProductById,
} from "../controller/porduct.controller.mjs";

export function productsRoutes(app) {
  app.post("/api/addproducts", addProducts);
  app.get("/products", fetchAllProducts);
  app.get("/product/:id", fetchProductById);
}
