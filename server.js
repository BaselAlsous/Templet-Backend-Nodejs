require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());



app.use("*", (req, res) => res.status(404).json("NO content at this path"));
//====================================================// Run Server
app.listen(process.env.LOCAL_PORT, process.env.LOCAL_HOST, function () { });


