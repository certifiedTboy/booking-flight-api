This is a simple flight booking RESTful API
It is created strictly following the MVC design pattern.

// Run npm install at the root folder to install all API depencies
// Start API at the root folder using ==== node index.js; npm start || npm run dev

=== npm run dev starts the server with nodemon.
The API runs on PORT 3000

The root page is served on http://localhost:3000

======= BASIC ROUTES =========
// Get All Available Flights
http Verb = GET
http://localhost:3000/v1/flights

// Get Single Flight by Id
http Verb = GET
http://localhost:3000/v1/flights/0

// Creat new Flight
http Verb = POST
http://localhost:3000/v1/flights

NB: the time for the flights a programatically generated
// There is no need for time to be provided when creating a new Flight
// date for the flight strictly follows the "YYYY/MM/DD" format

// Update Flight Id
http Verb = UPDATE
http://localhost:3000/v1/flights/0
NB: the time for the flights a programatically generated
// There is no need for time to be provided when creating a new Flight
// date for the flight strictly follows the "YYYY/MM/DD" format

//Delete Flight by Id
http Verb = DELETE
http://localhost:3000/v1/flights/0
