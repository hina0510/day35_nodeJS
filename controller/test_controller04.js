const service = require("../service/test_service04");
const index = (req, res)=>{
    const mem = service.index();
    res.render("index", {member : mem});
}
const test1 = (req, res)=>{
    console.log("=== test1 컨트롤러 연결 ===")
    //res.render("test1");
    res.redirect("/"); // 재요청 : 해당하는 url로 연결됨 (/test1 입력 시 /로 연결됨)
}
const test2 = (req, res)=>{
    res.render("test2");
}
module.exports = {index:index, t1 : test1, t2: test2}; 