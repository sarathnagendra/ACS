var express=require('express')
var app=express()
app.use(express.static('public'))

//var Datastore = require('nedb')
  //var db2 = new Datastore({ filename: 'db2', autoload: true })

//var bodyParser = require('body-parser')


var mongojs = require('mongojs')
var db2 = mongojs('mongodb://aits:acs579@ds245680.mlab.com:45680/sarath', ['admini'])

app.get('/home',function(req,res){

	res.sendFile(__dirname+'/public/acs1.html')
})

app.get('/signup',function(req,res){

	res.sendFile(__dirname+'/public/register.html')
})

app.get('/result',function(req,res){

	res.sendFile(__dirname+'/public/final.html')

})

/*app.get('/register',function(req,res){
  	res.send('Successfully Register')
  })*/

app.get('/home1',function(req,res){
   var doc={
               name:req.query.name,
               rollno:req.query.rollno,
               branch:req.query.my_menu,
               year:req.query.my_menu1
           }
	console.log(doc)
db2.admini.insert(doc, function (err, newDoc) { 
    console.log(err)
   res.sendFile(__dirname+'/public/final.html')
   //res.send('Successfully Register')
})
})

app.listen(9999,function(){
  	console.log("start the server in 9999")
 })