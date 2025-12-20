import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app  = express() ;
const PORT = process.env.PORT || 4000 

app.get("/" , (req,res) => {

    res.send("hello kishan")

} )

app.get("/api/jokes" , (req,res) => {

    const jokes = [

        {

            "id" : 1,
            "title" : "joke1",
            "content" : "joke1 content"

        },
        {

            "id" : 2,
            "title" : "joke2",
            "content" : "joke2 content"

        },
        {

            "id" : 3,
            "title" : "joke3",
            "content" : "joke3 content"

        },

 

    ]

    res.json(jokes)


}  )

app.listen(PORT, () => {

    console.log(`server running at http://localhost:${PORT}`);
    

} )





