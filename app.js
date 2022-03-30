const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"));
// const mongoose = require("mongoose");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// mongoose
//   .connect(mongoDB)
//   .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
//   })
//   .catch((e) => console.error(e));