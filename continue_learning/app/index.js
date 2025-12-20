
import express from "express"
import dotenv from "dotenv"

dotenv.config() ;

const app = express() ;
const PORT = process.env.PORT || 4000

app.get("/" , (req,res) => {

    res.send("hello kishan")

} )


app.get("/app" , (req,res) => {

    res.send("hello app")

} )



app.listen(PORT, () => {

    console.log(`server running at http://localhost:${PORT}`);
    

} )





