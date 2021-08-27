import express from 'express'
const {Router} = express
import productsRoute from './products/routes.js'
import reviewsRoute from './reviews/routes.js'

const route = Router()

route.use('/products',productsRoute)
route.use('/reviews',reviewsRoute)

export default route