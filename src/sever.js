const express = require("express");
const app = express();
const path = require("path");
const configViewEngine = require("./config/viewsEngine");
require("dotenv").config();
const webRoutes = require("./routes/web");
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//config template engine
configViewEngine(app);

app.use("/", webRoutes);
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
