const connectToMongo= require("./db");
const express= require("express");
var cors= require("cors");

connectToMongo();
const app= express();

app.use(cors());
app.use(express.json());
//Available routes
app.use("/api/auth", require("./routes/auth"));

app.listen(5000, ()=>{
    console.log("Server started on port 5000");
})
