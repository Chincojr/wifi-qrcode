const express = require('express')// framework required for http protocol
const app = express()
const bodyParser = require('body-parser')// middleware required to accept form data
const QrPost = require('./routes/QrPost')
const port = process.env.PORT || 3000


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}))



app.get('/', (req, res)=> {
    res.render('index')
    
})


app.use(QrPost)


app.get('/redirect', (req,res) => {
    res.redirect('/')
})



app.listen(port, (req, res) => {
    console.log('Server Connected')

})





