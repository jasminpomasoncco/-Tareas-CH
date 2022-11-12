const { Router } = require('express')
const Contenedor = require('./contenedores/contenedor.js')
const contenedor = new Contenedor('productos.txt')
//const router_products = new Router()
const app = require('express')();

app.get('/', (req, res) => { 
    res.send(`<h1>Welcome </h1>`);
   });
   
   app.get('/products', async (req, res) => {
       try {
           res.status(200).send(await contenedor.getAll());
       } catch (error) {
           console.error(error);
       }
   });
   
   app.get('/randomProduct', async (req, res) => {
       try {
           let randomNumber = Math.floor(Math.random() * 3 +1);
           res.json(await contenedor.getById(randomNumber));
       } catch (error) {
           console.error(error);
       }
   });

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))