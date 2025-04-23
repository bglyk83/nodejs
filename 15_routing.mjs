import express from "express";
import userRouter from "./routes/user.mjs";

const app = express();
app.use(express.json());

//localhost:3000/users
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("SERVER 실행 중!!!!");
});
