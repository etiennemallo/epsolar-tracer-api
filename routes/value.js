var express = require("express");
var router = express.Router();

var getValue = require("../controller/modbus.js").getValue;

/* GET users listing. */
router.get("/", function (req, res, next) {
  getValue(req.query.name).then((value) => {
    res.json(value);
  });
});



module.exports = router;
