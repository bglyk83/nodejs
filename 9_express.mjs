import express from "express";

const app = express();

app.use((req, res, next) => {
  res.setHeader("node-msg", "Hi! node.js!@");
  next();
});

app.get("/", (req, res, next) => {
  res.send("<h2>익스프레스 서버로 만든 첫번째 PAGE </h2>");
  next();
});

app.get("/hello", (req, res, next) => {
  response.setHeader("Content-Type", "appliction/json");
  res.status(200).json({ userif: "apple", name: "김사과", age: 20 });
  next();
});
app.listen(3000, () => {
  console.log("서버 실행 중!!!");
});
