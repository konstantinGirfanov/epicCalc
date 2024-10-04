const express = require("express");
const app = express();


app.use(express.static("html"));
app.use(express.static(__dirname));

app.use(function (_, response) {
    response.send("<a href='index.html'>EPIC BEBRA CALCULATOR</h1>");

});

app.listen(2999);