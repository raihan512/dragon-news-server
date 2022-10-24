const express = require("express");
const app = express();
var cors = require("cors");

const port = 5000;

app.use(cors());

const categories = require("./Data/categories.json");
const allNews = require("./Data/news.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/news", (req, res) => {
  res.send(allNews);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = allNews.find((selectedNews) => selectedNews._id === id);
  res.send(selectedNews);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id == 08) {
    res.send(allNews);
  } else {
    const newsCategory = allNews.filter(
      (newsCategory) => newsCategory.category_id === id
    );
    res.send(newsCategory);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
