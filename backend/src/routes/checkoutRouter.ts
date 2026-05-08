import { Router } from "express";
import { createCheckout } from "../controllers/checkoutControllers";

const router = Router();

router.post("/", createCheckout)

export default router;