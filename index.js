const express = require("express");
const { json } = require("express");
const apiV1 = require("./routes/api.v1");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(json());
app.use(bodyParser.urlencoded({ extended: false }));

// API versioning
app.use("/v1", apiV1);

// send Api home page and documentation on web browser
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
