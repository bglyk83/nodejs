const express = require("express");
const session = require("express-session");

const app = express();
app.use(express.json());

/*
secret: 세션 ID 서명용 키
resave: 메 요청시 세션 저장 여부
saveUnintialized: 초기 빈 세션 저장 여유
cookie.secure: HTTPS에서만 전송
*/

app.use(
  session({
    secret: "!@#$%^&*()",
    resave: false,
    saveUnintialized: false,
    cookie: { secure: false },
  })
);

app.post("/login", (req, res) => {
  const { userid, password } = req.body;

  //로그인 성공시
  req.session.user = { userid };
  res.send(`로그인 성공: ${userid}`);
});

app.get("/me", (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("로그아웃 되었습니다.");
  });
});

app.listen(3000, () => {
  console.log("SERVER 실행 중!");
});
