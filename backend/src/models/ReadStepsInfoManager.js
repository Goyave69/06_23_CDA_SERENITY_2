const AbstractManager = require("./AbstractManager");

class ReadStepsInfoManager extends AbstractManager {
  constructor() {
    super({ table: "read_steps_info" });
  }

  insert(readStepsInfo) {
    return this.connection
      .query(
        `insert into ${this.table} (steps_info_id, intervention_id) VALUES (?, ?)`,
        [readStepsInfo.steps_info_id, readStepsInfo.intervention_id]
      )
      .then(([rows]) => {
        return {
          status: 201,
          message: { id: rows.insertId, ...readStepsInfo },
        };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = ReadStepsInfoManager;
