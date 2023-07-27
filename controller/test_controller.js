const member = require("../db/memberDAO");
const index = (req, res)=>{
    console.log("=== index 컨트롤러 연결 ===");
    console.log(member);
    res.render("index");
}
const test1 = (req, res)=>{
    res.render("test1");
}
const test2 = (req, res)=>{
    res.render("test2");
}
module.exports = {index:index, t1 : test1, t2: test2}; 
//module.exports = {index, test1, test2};//내보내는 값이 여러개일 경우 {중괄호}로 감쌈