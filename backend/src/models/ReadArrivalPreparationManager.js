const AbstractManager = require("./AbstractManager");

class ReadArrivalPreparationManager extends AbstractManager {
  constructor() {
    super({ table: "read_arrival_preparation" });
  }

  insert(readArrivalPreparation) {
    return this.connection
      .query(
        `insert into ${this.table} (steps, intervention_id) VALUES (?, ?)`,
        [readArrivalPreparation.steps, readArrivalPreparation.intervention_id]
      )
      .then(([rows]) => {
        return {
          status: 201,
          message: { id: rows.insertId, ...readArrivalPreparation },
        };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }

  getByInterventionId(interventionId) {
    return this.connection
      .query(`select id, steps from ${this.table} where intervention_id = ?`, [
        interventionId,
      ])
      .then(([rows]) => {
        return { status: 200, message: rows[0] };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = ReadArrivalPreparationManager;
