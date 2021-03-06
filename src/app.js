import express from "express";
import logger from "morgan";
import SwaggerUi from "swagger-ui-express";
import cors from "cors";

import { connect } from "./config/db";
import { restRouter } from "./api";
import swaggerDocument from "./config/swagger.json";
import { Server } from "http";

const app = express();
const PORT = process.env.PORT || 8080;

connect();
// middlewares from express api
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(logger("dev"));

app.use("/api", restRouter);
app.use(
  "/api-docs",
  SwaggerUi.serve,
  SwaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
);
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.message = "Invalid route";
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

// trying
app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
