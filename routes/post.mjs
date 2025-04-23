import express from "express";

const router = express.Router();

router.use((req, res, next) => {
  console.log("posts에 존재하는 미들웨어");
  next();
});

// http://localhost:3000/posts (GET)
// 글 보기
router.get("/", (req, res) => {
  res.status(200).send("GET: /posts 글 보기");
});

// http://localhost:3000/posts (POST)
// 글 작성하기
router.post("/", (req, res) => {
  res.status(201).send("POST: /posts 글 작성하기");
});

// http://localhost:3000/posts (PUT)
// 글 수정하기
router.put("/:id", (req, res) => {
  res.status(201).send("PUT: /posts/:id 글 수정하기");
});

// http://localhost:3000/posts (DELETE)
// 글 삭제하기
router.delete("/:id", (req, res) => {
  res.status(201).send("DELETE: /users/:id 글 삭제하기");
});

const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);

export default router;
