const express = require('express');
const hbs = require('hbs');
require ('dotenv').config();

const app = express();
const port = process.env.PORT;

// ANTES DE UTILIZAR DOTENV ELEGIAMOS EL PUERTO DE FORMA MANUAL
// const port =5000;


//CONTENIDO ESTATICO
app.use(express.static('public'))

//HANDLEBARS
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials/')

app.get('/', function (req, res) {
    res.render('home')
})

app.get('/Productos',function(req,res){
    res.render('listaProductos',{
        nombre :'Santuli'
    })
})

app.get('/Login',function(req,res){
    res.render('login',{
        nombre :'Santuli'
    })
})


app.get('/estadistica',function(req,res){
    res.render('estadisticas',{
        nombre :'Santuli'
    })
})

app.get('/mostrarMesas',function(req,res){
    res.render('MostrarMesas',{
        nombre :'Cerro Santaigo'
    })
})







// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('*', function (req, res) {
//   res.send('ERROR 404')
// })


// app.use(express.static('public'));

// app.get("/index",(req,res)=>{
//     res.sendFile(__dirname + "/public/index.html")
// })



app.listen(port,()=>{
    console.log(`vizualizando la pagina en : http://localhost:${port}`)
})




// "dotenv": {
//     "version": "10.0.0",
//     "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-10.0.0.tgz",
//     "integrity": "sha512-rlBi9d8jpv9Sf1klPjNfFAuWDjKLwTIJJ/VxtoTwIR6hnZxcEOQCZg2oIL3MWBYw5GpUDKOEnND7LXTbIpQ03Q=="
//   },