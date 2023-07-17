const AbstractManager = require("./AbstractManager");

class AppointmentManager extends AbstractManager {
  constructor() {
    super({ table: "appointment_for_intervention" });
  }

  findAll() {
    return this.connection
      .query(
        `SELECT appointment_for_intervention.id,clinic.id as clinic_id, clinic.name as clinic_name, user.firstname,user.lastname,surgery.name, appointment_for_intervention.date, specialist_id ,intervention_id,speciality_id,intervention.user_id as user_id FROM ${this.table}
        JOIN intervention ON appointment_for_intervention.intervention_id=intervention.id
        JOIN surgery ON intervention.surgery_id=surgery.id
        JOIN user ON intervention.user_id=user.id
        JOIN clinic ON intervention.clinic_id=clinic.id`
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
        `INSERT INTO ${this.table} (date, specialist_id, speciality_id, intervention_id) VALUES (?, ?, ?, ?)`,
        [
          appointment.date,
          appointment.specialist_id,
          appointment.speciality_id,
          appointment.intervention_id,
        ]
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
