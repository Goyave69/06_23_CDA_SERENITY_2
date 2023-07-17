const AbstractManager = require("./AbstractManager");

class InterventionManager extends AbstractManager {
  constructor() {
    super({ table: "intervention" });
  }

  findAll() {
    return this.connection
      .query(
        `select intervention.id, user_id ,clinic_id,anaesthesia,date,duration,surgery_id,user_id ,user.firstname, user.lastname,surgery.name as surgery_name,clinic.name AS clinic_name FROM ${this.table}
        JOIN user ON user.id=intervention.user_id
        JOIN clinic ON clinic.id=intervention.clinic_id
        JOIN surgery ON surgery.id=intervention.surgery_id
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

  insert(intervention) {
    return this.connection
      .query(
        `insert into ${this.table} (anaesthesia, date, duration, surgery_id, user_id, clinic_id) VALUES (?, ?, ?, ?, ?, ?)`,
        [
          intervention.anaesthesia,
          intervention.date,
          intervention.duration || "01:00:00",
          intervention.surgery_id,
          intervention.user_id,
          intervention.clinic_id,
        ]
      )
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...intervention } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = InterventionManager;
