var express = require("express");
var router = express.Router();

var client = require("../controller/modbus.js").client;

var getValue = require("../controller/modbus.js").getValue;

var names = [
  "BATTERY_SOC",
  "CHARGING_EQUIPMENT_INPUT_POWER",
  "GENERATED_ENERGY_TODAY",
  "GENERATED_ENERGY_THIS_MONTH",
  "GENERATED_ENERGY_THIS_YEAR",
  "TOTAL_GENERATED_ENERGY",
  "TOTAL_CONSUMED_ENERGY",
  "DISCHARGING_EQUIPMENT_OUTPUT_POWER"
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  getStatus((status) => {
    res.json(status);
  });
});

async function getStatus(callback) {
  var status = [];

  for (let i = 0; i < names.length; i++) {
    var value = await getValue(names[i]);
    status.push(value);
  }

  callback(status);
}

module.exports = router;
