const AbstractManager = require("./AbstractManager");

class ClinicManager extends AbstractManager {
  constructor() {
    super({ table: "clinic" });
  }

  insert(clinic) {
    return this.connection
      .query(
        `insert into ${this.table} (name, address, city, zipcode, phone_number, email, handicap_access, free_parking) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          clinic.name,
          clinic.address,
          clinic.city,
          clinic.zipcode,
          clinic.phone_number,
          clinic.email,
          clinic.handicap_access || 0,
          clinic.free_parking || 0,
        ]
      )
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...clinic } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = ClinicManager;
