function formatDate(date) {
  const formattedDate = new Date(date);
  return `${formattedDate.getFullYear()}-${String(
    formattedDate.getMonth() + 1
  ).padStart(2, "0")}-${String(formattedDate.getDate()).padStart(2, "0")}`;
}

module.exports = {
  formatDate,
};
