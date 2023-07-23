const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const port= 3000;

var items=["Buy something for house","Have a breakfast","Start to work"];
var item="";

var today= new Date();
var currentDay=today.toLocaleDateString("en-US");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("index.ejs",{ kindOfDay:currentDay,lastItems:items});
});

app.post("/submit",function(req,res){
    item= req.body["item"];
    items.push(item);
    console.log(item);
    res.redirect("/");

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })