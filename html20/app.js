const express = require("express");
const app = express();
const things = require("./things.js");

// the app.get(takes a route in '/' or '/route_name', then takes a callback function())
app.use(things, things);

app.get("/*");

app.listen(3090);
