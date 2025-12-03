import express from "express"
import dotenv from "dotenv"
dotenv.config() ;
const app = express();

const PORT = process.env.PORT || 4000 

const githubData = {
  status: "success",
  message: "API is live!",
  data: {
    users: [
      { id: 1, name: "Darshan Patel", email: "darshan@example.com", role: "admin" },
      { id: 2, name: "Bansi Patel", email: "bansi@example.com", role: "user" },
      { id: 3, name: "Vignesh Patel", email: "vignesh@example.com", role: "user" },
      { id: 4, name: "monil tandel", email: "monil@example.com", role: "user" },
      { id: 5, name: "sunil suthar", email: "monil@example.com", role: "user" },
    ],
    timestamp: "2025-12-03T14:50:00Z"
  }
};

app.get("/api" , (req,res) => {

    res.json(githubData)

} )

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

