const Flights = require("../models/flight.model");
const { formatTime } = require("../utils/timeFormat");

// create new Flight function
exports.createFlight = async (req, res) => {
  let { title, price, date } = req.body;
  let flightDate = new Date(date);

  // generates time for the flight in am and pm based on the date provided
  const time = formatTime(flightDate);

  // convert date to specified format with hyphen seperators
  let newDate = flightDate.setDate(flightDate.getDate());
  newDate =
    ("0" + flightDate.getDate()).slice(-2) +
    "/" +
    ("0" + (flightDate.getMonth() + 1)).slice(-2) +
    "/" +
    flightDate.getFullYear();

  try {
    const newFlightData = {
      id: Flights.length,
      title,
      time,
      price: +price,
      date: newDate.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "-"), // replace / with hyphen using regEx
    };
    Flights.push(newFlightData);
    return res.status(200).json({ success: "New Flight Created", Flights });
  } catch (error) {
    return res.json({ error: "something went wrong" });
  }
};

// get all Flights function
exports.getAllFlights = async (req, res) => {
  try {
    res.status(200).json(Flights);
  } catch (error) {
    return res.json({ error: "Something went wrong" });
  }
};

// get single Flight function
exports.getSingleFlight = (req, res) => {
  const flightId = +req.params.id;
  try {
    const flight = Flights[flightId];
    if (!flight) {
      res.status(404).json({ error: "No flight Found" });
    }
    res.json(flight);
  } catch (error) {
    res.json({ error: "Something went wrong" });
  }
};

// Update Existing Flights function by flightId
exports.updateFlight = async (req, res) => {
  const flightId = +req.params.id;
  const { title, price, date } = req.body;
  let flightDate = new Date(date);

  // generates time for the flight in am and pm based on the date provided
  const time = formatTime(flightDate);

  // convert date to specified format with hyphen seperators
  let newDate = flightDate.setDate(flightDate.getDate());
  newDate =
    ("0" + flightDate.getDate()).slice(-2) +
    "/" +
    ("0" + (flightDate.getMonth() + 1)).slice(-2) +
    "/" +
    flightDate.getFullYear();

  try {
    const updateData = {
      title,
      time,
      price,
      date: newDate.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "-"), // replace "/"" with hyphen using regEx
    };
    // find the flight to be updated using the array findIndex method
    const foundIndex = Flights.findIndex((flights) => flights.id == flightId);

    Flights[foundIndex] = updateData;
    return res.status(200).json({
      success: `Flight with id:${flightId} updated successfully`,
      Flights,
    });
  } catch (error) {
    res.json({ message: "something went wrong" });
  }
};

// Delete from existing Flights function by id
exports.deleteFlight = async (req, res) => {
  const flightId = +req.params.id;
  try {
    const foundFlight = Flights.find((flights) => flights.id === flightId);
    for (let i = 0; i < Flights.length; i++) {
      if (Flights[i] === foundFlight) {
        Flights.splice(i, 1);
      }
    }
    return res.status(200).json({
      success: `Flight with id:${flightId} deleted successfully`,
      Flights,
    });
  } catch (error) {
    res.json({ message: "Something went wrong" });
  }
};
