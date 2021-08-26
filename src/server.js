import express from 'express'

const route = express()

const {PORT} = process.env
route.listen(PORT,()=>console.log(`server is running on port ${PORT}`)) 
route.on('error',(error)=>console.log(`server failed :${error}`)) 