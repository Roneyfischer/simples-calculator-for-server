//imports
import frontPage from "./2.frontPage.js";
import calculate from "./3.calculate.js";

//filtering requisition
const fRouter = (app) => {
  app.use(`/`, frontPage).use(`/calculate`, calculate);

  //for tests:
  console.log("estamos em src/2.Service/Routes/1.index.js");
};

export default fRouter;
