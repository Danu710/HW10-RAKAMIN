import express from "express";
import UserRoute from "./routes/UserRoute.js";
import cors from "cors";
import bodyParser from "body-parser";
//import formidableMiddleware from "express-formidable";

const app = express();
const PORT = 8080 || process.env.PORT;

// Include the controller as middleware
app.use(cors());
// app.use(formidableMiddleware());
app.use(express.json());
app.use(UserRoute);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
