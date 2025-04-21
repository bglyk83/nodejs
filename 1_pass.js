const path = require("path");

console.log(__dirname); // 현재 디렉토리 위치
console.log(__filename); //실행중인 현재 파일
console.log(path.sep); //디렉토리를 나누는 특수문자
console.log(path.delimiter); // 문장 끝을 나누는 문자

console.log(path.basename(__filename)); //파일 이름만 추출 가능
console.log(path.basename(__filename, "js")); //확장자를 제외

console.log(path.basename(__dirname)); // 현재 디렉토리명만 추출
console.log(path.dirname(__filename));
console.log(path.extname(__filename)); //확장명만 추출
