const express = require("express");
const app = express();

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine","ejs");
const ejsMate = require("ejs-mate");
app.engine("ejs",ejsMate);

app.get("/home",(req,res)=>{
  res.render("listings/SpaceX.ejs");
});

app.get("/update",(req,res)=>{
  res.render("listings/update.ejs");
});

app.get("/falcon9",(req,res)=>{
  res.render("listings/falcon9.ejs");
});
app.get("/falconheavy",(req,res)=>{
  res.render("listings/falconheavy.ejs");
});
app.get("/dragon",(req,res)=>{
  res.render("listings/dragon.ejs");
});
app.get("/starship",(req,res)=>{
  res.render("listings/starship.ejs");
});
app.get("/humanspaceflight",(req,res)=>{
  res.render("listings/humanspaceflight.ejs");
});
app.get("/rideshare",(req,res)=>{
  res.render("listings/rideshare.ejs");
});
app.get("/starshield",(req,res)=>{
  res.render("listings/starshield.ejs");
});
app.get("/starlink",(req,res)=>{
  res.render("listings/starlink.ejs");
});

app.listen(8080,()=>{
  console.log('App is listing to port : 8080');
})