const mongoose= require("mongoose");
const mongoURI= "mongodb+srv://amanjgd2626:amankumarnitkkr@cluster0.eccbper.mongodb.net/test";

const connectToMongo= async ()=>{
    try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");;
    }catch(err){
        console.error("Connection error:"+err);
    }
}

module.exports= connectToMongo;