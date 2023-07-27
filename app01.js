const express = require("express");
const member = require("./db/memberDAO");

const app = express();
const router = express.Router();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", router); // .use() = 미들웨어, 경로에 들어가면 라우터에 위임함

const router2 = express.Router();
app.use("/board", router2);

router.get("/member/index", (req, res)=>{
    res.render("index");
});
router2.get("/index", (req, res)=>{     //앞에서 /board는 생략
    res.send("/board/index 연결되었습니다");
});

router.get("/test1", (req, res)=>{
    console.log(member);
    res.render("test1");
});
router.get("/test2", (req, res)=>{
    res.render("test2");
});

/*
app.get("/", (req, res)=>{
    res.render("index");
});
*/
app.listen(3000, ()=>{console.log("3000 port server")});