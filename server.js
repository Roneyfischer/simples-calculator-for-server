//imports
import app from "./src/0.Config/server/app.js";
import * as dotenv from "dotenv";
import { Console } from "console";

//to run the server
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `server is running on port "${process.env.SERVER_PORT}", with CORS_URL_ORIGIN: "${process.env.CORS_URL_ORIGIN}"`
  );
});
