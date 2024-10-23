import app from "./app.js"
import { connectDb } from "./db/index.js";

connectDb()
  .then(() => {
    app.listen(5000, () => console.log("server started at 5000"));
  })
  .catch((err) => console.log(err));
