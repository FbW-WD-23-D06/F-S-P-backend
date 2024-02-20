import "./config.js";
import "./db-connect.js";
import express from "express";
import cors from "cors";
import endpointsInfosHTMLResponse from "./utils/endpointsInfosHTMLResponse.js";
import { postsRouter, postsMainPath } from "./routes/postsRoutes.js";

const port = process.env.PORT;
const app = express();

app.use(express.json());

const allowedOrigins = [
  "https://post-master.onrender.com",
  "http://localhost:5173/",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(postsMainPath, postsRouter);

app.get("/", endpointsInfosHTMLResponse);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} \n`);
});
