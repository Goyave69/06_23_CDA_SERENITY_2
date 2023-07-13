const AbstractManager = require("./AbstractManager");

class InterventionManager extends AbstractManager {
  constructor() {
    super({ table: "intervention" });
  }

  insert(intervention) {
    return this.connection
      .query(
        `insert into ${this.table} (name, date, anaesthesia, duration, location_body, user_id, clinic_id) VALUES (?, ?, ?, ?, ?, ?, ? )`,
        [
          intervention.name,
          intervention.date,
          intervention.anaesthesia,
          intervention.duration || "01:00:00",
          intervention.location_body,
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
