const express = require("express");
const path = require("path");
const { title } = require("process");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
//127.0.0.1:3000/test.html
//app.use(express.static("public")); //실제 폴더 이름

// /static url접근,public폴더 접근
app.use("/static", express.static("public"));
app.set("view engine", "ejs");

//경로 지정
app.set("views", path.join(__dirname, "views"));

//127.0.0.1:3000
app.get("/", (req, res) => {
  res.send("<h2>홈페이지 입니다. 다양한 기능을 테스트 해 보새요</h2>");
});

//127.0.0.1:3000/user/10
app.get("/user/:id", (req, res) => {
  res.send(`요청한 사용자 ID : ${req.params.id}입니다.`);
});

//127.0.0.1:3000/search?keyword=hi&number=100
app.get("/search", (req, res) => {
  const { keyword, number } = req.query;
  res.send(`검색어 : ${keyword} , number : ${number}`);
});

app.post("/submit", (req, res) => {
  const { name, age } = req.body;
  res.send(`NAME : ${name} , AGE : ${age}`);
});

app.get("/hello", (req, res) => {
  res.render("NAME :", { name: "김사과" });
});

app.get("/posts", (req, res) => {
  const posts = [
    {
      title: "첫번째 글",
      content: "내용입니다.",
    },
    {
      title: "두번째 글",
      content: "내용입니다.",
    },
  ];
  res.render("posts", { posts });
});

app.listen(port, () => {
  console.log("SERVER 실행 중!!!");
});
