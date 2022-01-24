const express = require("express");
const router = require("./routes/api");
const db =require("./config/database");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(router);

app.listen(3000,()=>{
    console.log(`dijalankan di http://localhost:3000`);
})