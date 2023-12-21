import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";
const app: Express = express();

dotenv.config();

sequelize;


app.set("views", "./views");
app.set("view engine", "pug");

const port: number | string = process.env.PORT || 3000;


app.get("/tours", (req: Request, res: Response) => {
  res.render("client/pages/tours/index");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});