
import db from "../../db/connection.js";


export const list = async (req,res,next)=>{
    try {
        const products = await db.query(`SELECT * FROM products`)
        res.send(products.rows)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const single = async(req,res,next)=>{
    try {
        const {product_id} = req.params
        const product = await db.query(`SELECT * FROM products WHERE product_id=${product_id}`)
        const [found, ...rest] = product.rows
        res.status(found?200:404).send(found)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const create = async (req,res,next)=>{
    try {
        const {name,description,brand,image_url,price,category}=req.body;
        const product = await db.query(`INSERT INTO products(name,description,brand,image_url,price,category) VALUES('${name}','${description}','${brand}','${image_url}','${price}','${category}') RETURNING *`)
        res.send(product.rows[0])
    } catch (error) {
        res.status(500).send(error)
    }
}

export const update = async(req,res,next)=>{
    try {
        const {product_id} = req.params
        const{name,description,brand,image_url,price,category} = req.body
        const product = await db.query(`UPDATE products SET name='${name}',description='${description}',brand='${brand}',image_url='${image_url}',price='${price}',category='${category}',updated_at=NOW() WHERE product_id=${product_id} RETURNING *`)
        const [found, ...rest] = product.rows
        res.status(found?200:400).send(found)
    } catch (error) {
        res.status(500).send(error)
    }
}

// export const updateImage = async(req,res,next)=>{
//     try {
//         const {product_id} = req.params
//         const{image_url} = req.path.file
//         const product = await db.query(`UPDATE products SET image_url='${image_url}', updated_at=NOW() WHERE product_id=${product_id} RETURNING *`)
//         res.send(product.rows)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }


export const deleteProduct = async(req,res,next)=>{
    try {
        const {product_id} = req.params
        const {name,description,brand,image_url,price,category}=req.body
        const dbResult = await db.query(`DELETE FROM products WHERE product_id=${product_id}`)
        res.status(dbResult.rowCount?200:400).send(error)
    } catch (error) {
        res.status(500).send(error)
    }
}