export function formatDate(date) {
  const formattedDate = new Date(date);
  return `${formattedDate.getFullYear()}-${String(
    formattedDate.getMonth() + 1
  ).padStart(2, "0")}-${String(formattedDate.getDate()).padStart(2, "0")}`;
}

export function getNameOfDay(date) {
  const interventionDate = new Date(date);
  const day = interventionDate.toLocaleDateString("fr-FR", { weekday: "long" });
  return day.charAt(0).toUpperCase() + day.slice(1);
}

export function getNumOfDay(date) {
  const interventionDate = new Date(date);
  return interventionDate.getDate();
}

export function getMonth(date) {
  const interventionDate = new Date(date);
  const month = interventionDate.toLocaleDateString("fr-FR", { month: "long" });
  return month.charAt(0).toUpperCase() + month.slice(1);
}

export function getTime(date) {
  const interventionDate = new Date(date);
  return interventionDate.toLocaleTimeString().slice(0, 5);
}

export function daysUntilIntervention(date) {
  const today = new Date();
  const interventionDate = new Date(date);
  return (
    Math.trunc((interventionDate - today) / (1000 * 3600 * 24)) +
    (interventionDate.getHours() < today.getHours())
  );
}
