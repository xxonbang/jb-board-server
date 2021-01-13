// environment variables management & setting 모듈 (project root folder 내 .env 파일 생성)
import dotenv from "dotenv";
import app from "./server.js";
import mongoose from "mongoose";
import "./db.js";

dotenv.config();

const PORT = process.env.SERVER_PORT || 4000;

const handleListening = () => console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);


//TODO: 1. client 에서 axios 로 서버에서 res.send 값 받아오는지 test
//TODO: 2. mongo DB 적용
//TODO: 3. maybe cookie parser module 설치 및 활용해야 할 것으로 보임 (mongoDB 및 session 관리 목적)

