const AbstractManager = require("./AbstractManager");

class ClinicManager extends AbstractManager {
  constructor() {
    super({ table: "clinic" });
  }

  insert(clinic) {
    return this.connection
      .query(
        `insert into ${this.table} (name, address, city, zipcode, phone_number, email, handicap_access, free_parking, open_hours, close_hours) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          clinic.name,
          clinic.address,
          clinic.city,
          clinic.zipcode,
          clinic.phone_number,
          clinic.email,
          clinic.handicap_access || 0,
          clinic.free_parking || 0,
          clinic.open_hours,
          clinic.close_hours,
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

  newSpecialist(data) {
    return this.connection
      .query(
        `insert into clinic_has_specialist (specialist_id, clinic_id) VALUES (?, ?)`,
        [data.specialist_id, data.clinic_id]
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

module.exports = ClinicManager;
