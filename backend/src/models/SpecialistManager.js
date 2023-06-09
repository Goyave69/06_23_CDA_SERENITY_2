const AbstractManager = require("./AbstractManager");

class SpecialistManager extends AbstractManager {
  constructor() {
    super({ table: "specialist" });
  }

  async insert(specialist) {
    return this.connection
      .query(`insert into ${this.table} (user_id) VALUES (?)`, [
        specialist.user_id,
      ])
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...specialist } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = SpecialistManager;
