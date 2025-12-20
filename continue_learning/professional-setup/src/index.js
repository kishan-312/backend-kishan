import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`mongodb connection is failed `, err);
  });
