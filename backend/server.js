import express from "express"
import authRoutes from "./routes/auth.routes.js";
import connnectMongoDB from "./db/connectionMongo.js";
import dotenv from "dotenv"; 

dotenv.config(); 


const app =  express();
const PORT = process.env.PORT || 3000;

console.log(process.env.MONGO_URI);
app.use("/api/auth" , authRoutes);

app.use(express.json()); //it is used to parse req.body 

app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`);
    connnectMongoDB()
})

