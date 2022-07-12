var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// set the view engine to ejs
// app.set('view engine', require('ejs').renderFile)
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render('index.html')
})

app.post('/add', (req, res) => {
    const userValue = {
        name: req.body.name,
        lastname: req.body.lastname
    }
    res.render('mypage.html', {
        user: userValue
        })
})

app.listen(5100,function(){
    console.log('server running on port 5100');
})
