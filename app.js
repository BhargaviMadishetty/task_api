const express = require("express");
const bodyParser = require("body-parser");
const router = require("./route.js");
const Connection = require("./Connection/connection.js");
Connection();


const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded());

app.use("/v1", router);


app.listen(8080, () => {
    console.log("Server is up at Port 8080 !");
});

module.exports = app;