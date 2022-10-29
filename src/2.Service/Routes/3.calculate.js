//imports
import express from "express";
import operatorsFilter from "../../3.Controller/operators/operatorsFilter.js";

//import express router
const calculate = express.Router();

calculate.post("/", async (req, res) => {
  callCalculater();
  function callCalculater() {
    res.status(200).json({ result: `${operatorsFilter(req.body)}` });
  }
});

export default calculate;
