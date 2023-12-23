import express, { Express } from "express";
import dotenv from "dotenv";
// import sequelize from "./config/database";
import clientRoutes from "./routes/client/index.route";
import moment from "moment";

dotenv.config();

// sequelize;

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "pug");


// App Local Variables
app.locals.moment = moment;

// Routes Client
clientRoutes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});