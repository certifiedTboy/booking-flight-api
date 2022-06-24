exports.checkFlightsInputValue = (req, res, next) => {
  if (!req.body.title || !req.body.price || !req.body.date) {
    return res
      .status(400)
      .json({ error: "Invalid input type or missing data" });
  }
  next();
};

exports.checkPriceFormat = (req, res, next) => {
  if (isNaN(req.body.price) === true) {
    return res.json({ error: "invalid price data" });
  }
  next();
};

exports.checkDateFormat = (req, res, next) => {
  if (req.body.date.match(/^\d{4}-\d{2}-\d{2}$/) === null) {
    return res
      .status(400)
      .json({ error: `Invalid date format... Use YYYY-MM-DD` });
  }
  next();
};
