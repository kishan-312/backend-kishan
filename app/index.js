import express from "express"
import dotenv from "dotenv"
dotenv.config() ;
const app = express();

const PORT = process.env.PORT || 4000 

app.get("/" , (req,res) => {

    res.send("hello kishan mistry")

} )


app.get("/login" , (req,res) => {

    res.send("hello how are you ?")

} )

app.get("/login2" , (req,res) => {

    res.send("<h1>hello how are you ?</h1>")

} )

app.listen(PORT , () => {

    console.log(`app listening on port ${PORT}`);
    

} )

