import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "erro mongo"));
db.once("open", () => {
  console.log("DB connection success");
});

const app = express();
app.use(express.json());
routes(app);

export default app;
