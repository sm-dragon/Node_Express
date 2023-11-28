const express = require("express");
const cors = require("cors");
const app = express();
const whitelist = ["http://localhost"];

app.set("port", process.env.PORT || 3030);
app.set("host", process.env.HOST || "0.0.0.0");

app.use(cors())

app.get("/", function (req, res) {
  res.send("접속된 아이피: " + req.ip);
});

app.listen(app.get("port"), app.get("host"), () =>
  console.log(
    "Server is running on : " + app.get("host") + ":" + app.get("port")
  )
);

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })