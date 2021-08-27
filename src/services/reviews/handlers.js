
import db from "../../db/connection.js";


export const list = async (req,res,next)=>{
    try {
        const reviews = await db.query(`SELECT * FROM reviews`)
        res.send(reviews.rows)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const single = async(req,res,next)=>{
    try {
        const {review_id} = req.params
        const reviews = await db.query(`SELECT * FROM reviews WHERE review_id=${review_id}`)
        const [found, ...rest] = reviews.rows
        res.status(found?200:400).send(found)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const create = async(req,res,next)=>{
    try {
        const {comment,rate,product_id}=req.body
        const review = await db.query(`INSERT INTO reviews(comment,rate,product_id) VALUES('${comment}','${rate}','${product_id}') RETURNING*`)
        res.send(review.rows[0])
    } catch (error) {
        res.status(500).send(error)
    }
}

export const update = async(req,res,next)=>{
    try { 
        const {review_id} = req.params
        const {comment,rate,product_id}=req.body
        const reviews = await db.query(`UPDATE reviews SET comment='${comment}',rate='${rate}',product_id='${product_id}' WHERE review_id=${review_id} RETURNING*`)
        const [found,...rest] = reviews.rows
        res.status(found?200:400).send(found)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deletereview = async(req,res,next)=>{
    try {
        const {review_id} = req.params
        const {comment,rate,product_id}=req.body
        const dbResult = await db.query(`DELETE FROM reviews WHERE review_id=${review_id}`)
        res.status(dbResult.rowCount?200:400).send(error)
    } catch (error) {
        res.status(500).send(error)
    }
}