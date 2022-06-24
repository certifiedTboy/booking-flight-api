const express = require("express");
// import all flights function from the controller folder using object destructuring
const {
  createFlight,
  getAllFlights,
  getSingleFlight,
  updateFlight,
  deleteFlight,
} = require("../controllers/flightController");
// import middleware function from middleware folder to check input data validity
const {
  checkFlightsInputValue,
  checkDateFormat,
  checkPriceFormat,
} = require("../middlewares/index");
const methodOverride = require("method-override");
const router = express.Router();

router.use(methodOverride("method"));

// get all Flights Route
router.get("/", getAllFlights);
//get a single Flight by id Route
router.get("/:id", getSingleFlight);
// create new Flight Route
router.post(
  "/",
  checkFlightsInputValue,
  checkDateFormat,
  checkPriceFormat,
  createFlight
);
// delete a single Flight Route
router.delete("/:id", deleteFlight);
// update Flight Route
router.put("/:id", checkFlightsInputValue, checkDateFormat, updateFlight);

module.exports = router;
