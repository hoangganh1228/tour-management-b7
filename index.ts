import express, { Express } from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";
import clientRoutes from "./routes/client/index.route";
const app: Express = express();

dotenv.config();

sequelize;


app.set("views", "./views");
app.set("view engine", "pug");

const port: number | string = process.env.PORT || 3000;


// Routes Client
clientRoutes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});