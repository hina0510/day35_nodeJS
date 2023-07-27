const express = require("express");
const ctrl = require("../controller/test_controller");
const router =express.Router();

router.get("/", ctrl.index); //url과 연결된 파일을 controller에서 받아옴
router.get("/test1", ctrl.t1);
router.get("/test2", ctrl.t2);

module.exports = router;