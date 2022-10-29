//imports
import express from "express";
import fCalculate from "./../../2.Service/busnessRoule/operations.js";

//import express router
const calculate = express.Router();

calculate.post("/", async (req, res) => {
  res.status(200).json({ msg: "in /calculate: ok" });

  fCalculate(req.body);
  //for test
  console.log("in /calculate: ok");
});

export default calculate;
