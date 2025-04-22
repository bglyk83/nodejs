const fs = require("fs");

/*
//동기 방식 예외 처리 없음
console.log("---------동기 방식---------");

fs.writeFileSync("output.txt", "이 내용이 파일에 저장됩니다.");
console.log("파일 저장 완료 (동기)");

//비동기 방식 예외처리 필요
console.log("--------비동기 방식---------");

fs.writeFile("output2.txt", "비동기 방식으로 저장합니다.", (err) => {
  if (err) {
    console.error("저장 실패", err);
    return;
  } else {
    console.log("파일 저장 완료(비동기)");
  }
});


fs.appendFile("output2.txt", "\n 새로운 줄이 추가됩니다.", (err) => {
  if (err) throw err;
  console.log("내용 추가 완료");
});
*/

fs.unlink("output.txt", (err) => {
  if (err) throw err;
  console.log("내용 삭제 완료");
});
