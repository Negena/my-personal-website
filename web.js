const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public/css/pictures'));

app.get("/", (req,res) => {
  res.sendFile('home.html', {root: __dirname})
})

app.get("/home", (req,res) => {
  res.sendFile('home.html', {root: __dirname})
})


app.get("/music", (req,res) =>{
  res.sendFile("music.html", {root: __dirname})
})

app.get("/role", (req,res) =>{
  res.sendFile("role.html", {root: __dirname})
})

app.get("/reading", (req,res) =>{
  res.sendFile("reading.html", {root: __dirname})
})

app.use((req,res) =>{
  res.status(404).sendFile('404.html', {root: __dirname})
})

app.listen(3000, function(err){
  if (err) throw error
  else console.log("works on port 3000")
})
