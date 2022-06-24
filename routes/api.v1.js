// configuration for Api versionning incase of an upgrade
const express = require("express");
const flightRoutes = require("./flightRoutes");

const apiV1 = express.Router();

apiV1.use("/flights", flightRoutes);

module.exports = apiV1;
