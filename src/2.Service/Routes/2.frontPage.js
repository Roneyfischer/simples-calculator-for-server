//imports
import express from "express";

// express router
const frontPage = express.Router();

//sendo frontPage for user on request
frontPage.get("/", async (req, res) => {
  res.status(200).json({ message: "Página Inicial" });
});

export default frontPage;
