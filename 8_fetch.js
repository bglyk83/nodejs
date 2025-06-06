const http = require("http");
const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "Javascript" },
  { name: "Java" },
  { name: "Python" },
  { name: "AI" },
  { name: "Node.js" },
  { name: "MySql" },
  { name: "mongoDB" },
];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const url = req.url;
  const method = req.method;
  if (method === "GET") {
    res.writeHead(200, { "Content-Type": "appliction/json" });
    res.end(JSON.stringify(skills));
  }
});

server.listen(3000, () => {
  console.log("SERVER 실행 중");
});
