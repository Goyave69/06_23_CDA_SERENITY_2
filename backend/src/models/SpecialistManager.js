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

  findAll() {
    return this.connection
      .query(
        `
        SELECT clinic.name as c_name, user.firstname, user.lastname, user.email, speciality.name 
        FROM specialist
        JOIN user ON specialist.user_id = user.id
        JOIN specialist_has_speciality ON specialist.id = specialist_has_speciality.specialist_id
        JOIN speciality ON specialist_has_speciality.speciality_id = speciality.id
        JOIN clinic_has_specialist ON specialist.id = clinic_has_specialist.specialist_id
        JOIN clinic ON clinic_has_specialist.clinic_id = clinic.id;
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
}

module.exports = SpecialistManager;
