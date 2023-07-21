const AbstractManager = require("./AbstractManager");

class InterventionManager extends AbstractManager {
  constructor() {
    super({ table: "intervention" });
  }

  findAll() {
    return this.connection
      .query(
        `select intervention.id, user_id ,clinic_id,anaesthesia,date,duration,surgery_id,user_id ,user.firstname, user.lastname,surgery.name as surgery_name,clinic.name AS clinic_name FROM ${this.table}
        JOIN user ON user.id=intervention.user_id
        JOIN clinic ON clinic.id=intervention.clinic_id
        JOIN surgery ON surgery.id=intervention.surgery_id
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

  insert(intervention) {
    return this.connection
      .query(
        `insert into ${this.table} (anaesthesia, date, duration, surgery_id, user_id, clinic_id) VALUES (?, ?, ?, ?, ?, ?)`,
        [
          intervention.anaesthesia,
          intervention.date,
          intervention.duration || "01:00:00",
          intervention.surgery_id,
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

  progression(id) {
    const data = [];
    for (let index = 0; index < 9; index += 1) {
      data.push(id);
    }

    return this.connection
      .query(
        `
        SELECT ${this.table}.id AS interventionId, ${this.table}.date AS interventionDate, 
        (SELECT SUM(rsi.is_checked) FROM read_steps_info AS rsi WHERE rsi.intervention_id = ?) AS rsiDone,
        (SELECT count(rsi.is_checked) FROM read_steps_info AS rsi WHERE rsi.intervention_id = ?) AS rsiMax,
        (SELECT SUM(da.is_checked) FROM done_administrative AS da WHERE da.intervention_id = ?) AS daDone,
        (SELECT count(da.is_checked) FROM done_administrative AS da WHERE da.intervention_id = ?) AS daMax,
        rap.steps AS rapDone,
        (SELECT count(afi.date) FROM appointment_for_intervention AS afi WHERE afi.intervention_id = ?) AS afiDone,
        (SELECT count(afi.id) FROM appointment_for_intervention AS afi WHERE afi.intervention_id = ?) AS afiMax,
        (SELECT SUM(dcl.is_checked) FROM done_check_list AS dcl WHERE dcl.intervention_id = ?) AS dclDone,
        (SELECT count(dcl.is_checked) FROM done_check_list AS dcl WHERE dcl.intervention_id = ?) AS dclMax
        FROM  ${this.table} 
        JOIN read_arrival_preparation AS rap ON ${this.table}.id = rap.intervention_id
        WHERE ${this.table}.id = ?
      `,
        data
      )
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

  nextPatientIntervention(userId) {
    return this.connection
      .query(
        `select id from  ${this.table} WHERE user_id = ? AND date >= CURDATE() ORDER BY date ASC LIMIT 1`,
        [userId]
      )
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

module.exports = InterventionManager;
