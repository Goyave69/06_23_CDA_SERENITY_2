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

  newSpecialist(data) {
    return this.connection
      .query(
        `insert into specialist_has_speciality (specialist_id, speciality_id) VALUES (?, ?)`,
        [data.specialist_id, data.speciality_id]
      )
      .then(([rows]) => {
        return rows.length === 0
          ? { status: 404, message: {} }
          : { status: 201, message: rows[0] };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = SpecialityManager;
