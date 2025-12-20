import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express() ;

const PORT = process.env.PORT || 4000 ;

app.get("/" , (req,res) => {

    res.send("hello baby")

} )

app.get("/api/jokes" , (req,res) => {

    const jokes = [

        {

            id : 1 ,
            title : "joke1",
            content : "this is 1st joke"

        },

        {

            id : 2 ,
            title : "joke2",
            content : "this is 2nd joke"

        },

        {

            id : 3 ,
            title : "joke3",
            content : "this is 3rd joke"

        },

        {

            id : 4 ,
            title : "joke4",
            content : "this is 4th joke"

        },

    ]

    res.send(jokes)

} )

app.listen(PORT, () => {

    console.log(`server running at  http://localhost:${PORT}`);
    

} )








