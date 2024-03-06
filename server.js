import "./config.js";
import "./db-connect.js";
import express from "express";
import cors from "cors";
import { postsRouter, postsMainPath } from "./routes/postsRoutes.js";
import { usersMainPath, usersRouter } from "./routes/usersRoutes.js";
import { routesInfosHTML } from "./utils/routes-infos-HTML.js";
import {
  errorResponder,
  invalidPathHandler,
} from "./middleware/errorHandling.js";

const port = process.env.PORT;
const app = express();

app.use(express.json());

const allowedOrigins = [
  "https://post-master.onrender.com",
  "http://localhost:5173",
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

// Middleware to log the method and path of each request, and the body of POST requests
app.use((req, res, next) => {
  console.log(
    `current request infos: ${req.method}  ${req.path} `,
    req.method === "POST" && `req.body: ${JSON.stringify(req.body)}`,
    " \n"
  );
  next();
});

app.use(postsMainPath, postsRouter);
app.use(usersMainPath, usersRouter);

app.get("/", (req, res) => res.send(routesInfosHTML(app)));

app.use(invalidPathHandler);
app.use(errorResponder);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} \n`);
});
