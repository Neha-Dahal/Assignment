import { Router } from "express";
import { getProducts, addProduct } from "../controllers/product.controller";
import { auth } from "../middlewares/auth.middleware";

const router = Router();

router.post("/addProduct", addProduct);
router.get("/getProducts", getProducts);

export default router;
