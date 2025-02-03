import express from "express"


const app =  express();

app.use("/api/auth" , authRoutes);

app.listen(3000 , ()=>{
    console.log("your server is listening")
})