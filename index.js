const express = require("express")
const dbConnect = require("./database/db.connect") 
const app = express()
const morgan = require('morgan')
const router = require("./router")
const cors = require("cors");

app.use(express.json())
dbConnect()

app.use(cors({
  origin: "http://localhost:3000", // your frontend
  credentials: true

}));
app.use('/api',router)
app.use(morgan('dev'))
app.listen(3001,()=>{
    console.log("server is is connected")
})