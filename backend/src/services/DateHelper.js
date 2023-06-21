function formatTime(date) {
  const formattedTime = new Date(date);
  return `${formattedTime.getFullYear()}-${String(
    formattedTime.getMonth() + 1
  ).padStart(2, "0")}-${String(formattedTime.getDate()).padStart(2, "0")}`;
}

module.exports = {
  formatTime,
};
