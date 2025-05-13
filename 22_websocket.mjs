/*
    웹소켓
    웹소켓은 웹 브라우저와 서버 사이에 지속적으로 연결을 유지하면서 실시간으로 데이터를 주고 받을 수 있는 통신 방식

*/

import { Socket } from "dgram";
import { channel } from "diagnostics_channel";
import express from "express";
import { createServer } from "http";
import path from "path";
import {Server} from "socket.io";
import { text } from "stream/consumers";
import { fileURLToPath } from "url";

const app=express();
const server=createServer(app);
const io= new Server(server);
const __filename = fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
//ES(.mjs)에서는 __dirname,__filename이 없음
//import.meta.url: 현재 파일의 경로
//fileURLTOPath: 실제 경로를 문자열로 변환
//path.dirname


app.use(express.static(path.join(__dirname,"public")));

const users = {}
const channels = ['lobby','sports','programming','music']


io.on("connection", (socket) => {
    socket.on("join", ({ nickname, channel }) => {
      socket.nickname=nickname;
      socket.channel = channel;
      users[socket.id]= {nickname,channel};
      socket.join(channel);

      const msg = {user:"system", text:`${nickname}님이 입장했습니다.`};
      io.to(channel).emit("message",msg);

      console.log("nickname: ", nickname, "channel: ", channel);
      updateUserList();
    });


    socket.on("chat",({text,to})=>{
            const sender = users[socket.id];
            if(!sender) return;
            const payload = {user: sender.nickname,text};


            //귓속말 처리 해야 함
            if(to){
                const receiverSocket = Object.entries(users).find(([id,u])=>u.nickname===to)?.[0];//[0] 소켓ID, ?.(옵션널 체이닝): 값이 undefined일 경우 에러 없이 넘어가게 함(사용자가 없을 수도 있으니 안전하게 접근) 
                if(receiverSocket){
                    io.to(receiverSocket).emit("whisper",payload);
                    socket.emit("whisper",payload);
                }
            }
            else{            
            io.to(sender.channel).emit("message",payload);
            }
    })

socket.on("disconnect",()=>{
    const user = users[socket.id];
    if(user){
        const msg = { user:"system", text:`${user.nickname}님이 퇴장했습니다.`}
        io.to(user.channel).emit("message",msg)
        delete users[socket.id];
        updateUserList();
    }
})
    function updateUserList(){
        const userList = Object.values(users);
        io.emit("userList",userList)
    }

  });


server.listen(3000,()=>{
    console.log("Server 실행 중")
})
