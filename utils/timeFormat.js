exports.formatTime = (date) => {
  let hours = date.getHours();
  const ampm = hours >= 12 ? "pm" : "am";

  hours %= 12;
  hours = hours || 12;

  const currentTime = `${hours}${ampm}`;

  return currentTime;
};
