const AbstractManager = require("./AbstractManager");

class SpecialityManager extends AbstractManager {
  constructor() {
    super({ table: "speciality" });
  }

  async insert(speciality) {
    return this.connection
      .query(`insert into ${this.table} (name) VALUES (?)`, [speciality.name])
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...speciality } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = SpecialityManager;
