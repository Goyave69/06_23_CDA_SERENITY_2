const AbstractManager = require("./AbstractManager");

class AppointmentManager extends AbstractManager {
  constructor() {
    super({ table: "appointment" });
  }

  insert(appointment) {
    return this.connection
      .query(
        `INSERT INTO ${this.table} (date, user_id, intervention_id) VALUES (?, ?, ?)`,
        [appointment.date, appointment.user_id, appointment.intervention_id]
      )
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...appointment } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = AppointmentManager;
