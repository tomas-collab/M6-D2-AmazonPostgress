import express from 'express';
const { Router } = express;

import * as productsHandlers from './handlers.js'
const route = Router()

route.get("/",productsHandlers.list)
route.post("/",productsHandlers.create)
route.get("/:product_id",productsHandlers.single)
route.put("/:product_id",productsHandlers.update)
route.delete("/:product_id",productsHandlers.deleteProduct)

export default route

 