const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
const port=800;


// For serving static files
app.use('/static',express.static('static'))
app.use(express.urlencoded())
// set the templete engine as pug
app.set('view engine','pug')

// set the directory
app.set('views',path.join(__dirname,'views'))

// setting endpoint
app.get('/demo', function (req, res) {
    res.status(200).render('demo', { title: 'Hey bro', message: 'Its me a pug' })
  });
app.get('/', function (req, res) {
    res.status(200).render('index')
  });

app.get('/noob',(req,res)=>{
res.send("This is homepage");

});

app.get('/contact',(req,res)=>{
res.send("This is contact page");

});

app.post('/',(req,res)=>{
// console.log(req.body)
let name=req.body.name;
let age=req.body.age;
let gender=req.body.gender;
let more=req.body.more;

let outputRes=`
              The visitors name is ${name},
              and the age is ${age},
              and the gender is ${gender},
              More info : 
              ${more}
              `
              ;

// console.log(name);
// const params={"message":"nob man"}
fs.appendFileSync('data.txt',outputRes);
res.status(200).render('index.pug');

});
app.listen(port,()=>{
    console.log(`application stated on port${port}`);
})