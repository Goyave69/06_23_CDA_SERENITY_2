const AbstractManager = require("./AbstractManager");

class AppointmentManager extends AbstractManager {
  constructor() {
    super({ table: "appointment" });
  }

  findAll() {
    return this.connection
      .query(
        `SELECT i.*, a.date, u.firstname, u.lastname, u.email
      FROM serenity.intervention i
      JOIN serenity.appointment a ON i.id = a.intervention_id
      JOIN serenity.user u ON a.user_id = u.id;
      `
      )
      .then(([rows]) => {
        return { status: 200, message: rows };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
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
