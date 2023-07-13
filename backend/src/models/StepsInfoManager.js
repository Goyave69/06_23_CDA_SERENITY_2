const AbstractManager = require("./AbstractManager");

class StepsInfoManager extends AbstractManager {
  constructor() {
    super({ table: "steps_info" });
  }

  insert(stepsInfo) {
    return this.connection
      .query(
        `insert into ${this.table} (title, description, surgery_id) VALUES (?, ?, ?)`,
        [stepsInfo.title, stepsInfo.description, stepsInfo.surgery_id]
      )
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...stepsInfo } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = StepsInfoManager;
