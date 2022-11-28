const express=require('express');
const app=express();

const port=process.env.PORT||2000;
const path=require('path');
const hbs=require('hbs');
const statepath=path.join(__dirname,"../public");
const temp=path.join(__dirname,"../temp/views");
console.log(temp);

app.set('view engine','hbs');
app.set("views",temp)

app.use(express.static(statepath))
app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("/*",(req,res)=>{
    res.render('404')
})
app.listen(port,()=>{
    console.log(`server is start and listening in ${port}`)
})