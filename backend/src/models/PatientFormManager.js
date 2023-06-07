const AbstractManager = require("./AbstractManager");

class PatientFormManager extends AbstractManager {
  constructor() {
    super({ table: "patient_form" });
  }

  insert(patientForm) {
    return this.connection
      .query(
        `insert into ${this.table} (gender, birthdate, address, zipcode, city, country, family_situation, child, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          patientForm.gender,
          patientForm.birthdate,
          patientForm.address,
          patientForm.zipcode,
          patientForm.city,
          patientForm.country,
          patientForm.family_situation,
          patientForm.child,
          patientForm.user_id,
        ]
      )
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...patientForm } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = PatientFormManager;
