import express from 'express'
const {Router} = express
import * as reviewsHandlers from './handlers.js'


const route = Router()

route.get("/",reviewsHandlers.list)
route.get('/:review_id',reviewsHandlers.single)
route.post('/',reviewsHandlers.create)
route.put('/:review_id',reviewsHandlers.update)
route.delete('/:review_id',reviewsHandlers.deletereview)

export default route
