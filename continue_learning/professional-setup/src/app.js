import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// form mate
app.use(
  express.json({
    limit: "16kb",
  })
);

// url mate
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));
app.use(cookieParser());

export { app };
