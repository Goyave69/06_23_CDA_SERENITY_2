const AbstractManager = require("./AbstractManager");

class ClinicHoursManager extends AbstractManager {
  constructor() {
    super({ table: "clinic_hours" });
  }

  insert(clinic_hours, clinicId) {
    return this.connection
      .query(
        `INSERT INTO ${this.table} (clinic_id, open_hours, close_hours, day) VALUES (?, ?, ?, ?)`,
        [
          clinicId,
          clinic_hours.open_hours,
          clinic_hours.close_hours,
          clinic_hours.day,
        ]
      )
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...clinic_hours } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: err };
      });
  }
}
module.exports = ClinicHoursManager;
