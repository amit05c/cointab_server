const express= require("express")
const cors= require("cors")
const { connection } = require("./config/db")
const { usersRoutes } = require("./routes/user.router")

const app= express()
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to conintab server")
})
// amit
app.use("/users",usersRoutes)

const PORT= process.env.PORT || 8080
app.listen(PORT,async()=>{
    try{
        await connection
        console.log("Connected")
    }

    catch(err){
        console.log("Error")
    }
})
