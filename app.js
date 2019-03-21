const express = require('express')
const router = express.Router()

const {Product} = require('./db.js')

// router.get('/api/products', (req, res, next)=>{
//     return Product.findAll()
//     .then((products)=>{return products.map((product)=>{
//         const newList = products[0].dataValues
//         console.log(product)
//         newList.sale=product.getSalePrice()
//         return newList
//     })})
//     .then((products)=>res.send(products))
//     .catch(next)
// })

router.get('/api/products', (req, res, next)=>{
    return Product.findAll()
    .then((products)=>res.json(products))
    .catch(next)
})

router.post('/api/products', (req, res, next)=>{
    console.log(req.body)
    return Product.create(req.body)
    .then(product => res.json(product))
    .catch(next)
})

router.delete('/api/products/:id', (req, res, next)=>{
    console.log(req.body)
    return Product.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(204).end())
    .catch(next)
})

module.exports = router