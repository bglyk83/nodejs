import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true })); //post 요청용

app.post("/login", (req, res) => {
  const { userid, userpw } = req.body;
  console.log("ID : ", userid);
  console.log("PASSWORD : ", userpw);
  res.send(`ID :  ${userid}, PASSWORD : ${userpw}`);
});

app.listen(3000, () => {
  console.log("SERVER 실행 중");
});
