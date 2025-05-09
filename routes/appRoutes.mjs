// import { Router } from "express";
import {
  addProducts,
  fetchAllProducts,
} from "../controller/porduct.controller.mjs";

export function appRoutes(app) {
  app.post("/api/addproducts", addProducts);
  app.get("/", fetchAllProducts);
}
