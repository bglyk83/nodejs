const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); //클라이언트 <-> 서버 간에 데이터를 json 으로 처리

//게시글 목록 조회
app.get("/posts", (req, res) => {
  res.send("모든 게시물을 조회합니다.");
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  res.send(`게시글 등록됨 : ${title}`);
});

//게시글 조회
app.get("/posts/:id", (req, res) => {
  res.send(`${req.params.id}번 게시글을 조회합니다.`);
});

//게시글 수정
app.put("/posts/:id", (req, res) => {
  const { title, content } = req.body;
  res.send(`${req.params.id}번 게시글이 수정되었습니다.`);
});

//게시글 삭제
app.delete("/posts/:id", (req, res) => {
  res.send(`${req.params.id}번 게시글이 삭제되었습니다.`);
});

app.listen(port, () => {
  console.log("SERVER 실행 중!!!!");
});
