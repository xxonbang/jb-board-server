// const express = require('express'); -> commonJS style
import express from "express";
import helmet from "helmet";  // http header 설정을 바꿔줌 (보안 목적)
import morgan from "morgan";  // server logger module (3rd party log 모듈)
import bodyParser from "body-parser";  // client 의 post, put request 의 body 내용을 parsing 후 req.body 에 담음
import cors from 'cors';

import routes from "./routes.js";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import boardRouter from "./routers/boardRouter.js";

const app = express();

app.use(cors());

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.board, boardRouter);

export default app;

// respond with "hello world" when a GET request is made to the homepage
// app.get('/signup', function (req, res) {
//   res.send('hello world')
// })
