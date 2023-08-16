const path = require("path");

const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "../public")));
    
app.listen(3030, () => {
    console.log("El servidor prendió");
  });

  
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "views/index.html"));
  });