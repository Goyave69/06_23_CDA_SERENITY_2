const AbstractManager = require("./AbstractManager");

class SurgeryManager extends AbstractManager {
  constructor() {
    super({ table: "surgery" });
  }

  insert(surgery) {
    return this.connection
      .query(`insert into ${this.table} (name, location) VALUES (?, ?)`, [
        surgery.name,
        surgery.location,
      ])
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...surgery } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = SurgeryManager;
