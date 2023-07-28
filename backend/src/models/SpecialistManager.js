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
        SELECT specialist.id as specialist_id,clinic.name as clinic_name,clinic.id as clinic_id,user.id, user.firstname, user.lastname, user.email, speciality.name,user_id as user_id ,speciality.id as speciality_id
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
  
  findByUserId(user_id) {
    return this.connection
      .query(`select id from ${this.table} where user_id = ?`, [user_id])
      .then(([rows]) => {
        return rows.length === 0
          ? { status: 404, message: {} }
          : { status: 200, message: rows[0] };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }

  newIntervention(data) {
    return this.connection
      .query(`insert into specialist_has_intervention (specialist_id, intervention_id) VALUES (?, ?)`, [data.specialist_id, data.intervention_id])
      .then(([rows]) => {
        return rows.length === 0
          ? { status: 404, message: {} }
          : { status: 200, message: rows[0] };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = SpecialistManager;
