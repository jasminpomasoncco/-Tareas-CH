const { Router } = require('express')
const Contenedor = require('../contenedores/contenedor')
const contenedor = new Contenedor
const router_products = new Router()


router_products.get('/productos', (req, res) => {
    res.json({ mensaje: 'recibí una petición con método "get"' })
})

module.exports = router_products