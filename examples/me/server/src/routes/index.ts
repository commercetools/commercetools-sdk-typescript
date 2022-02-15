import { Router } from "express"
import customer from "./customer"
import product from "./product"
import cart from './cart'

const router = Router();

router.use(customer);
router.use(product)
router.use(cart)

export default router;
