const fs = require("fs");

//동기 방식 예외 처리 없음
console.log("---------동기 방식---------");
const data = fs.readFileSync("example.txt", "utf8");
console.log("파일 내용:", data);

//비동기 방식 예외처리 필요
console.log("--------비동기 방식---------");
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("파일 읽기 실패:", err);
    return;
  }
  console.log("파일 내용:", data);
});
console.log("프로그램을 종료합니다./이게 먼저 실행된다 ㅎㅎㅎㅎ");
