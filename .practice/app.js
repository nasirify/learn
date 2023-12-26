import express from "express";
import ejs from "ejs";

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.listen(PORT);
