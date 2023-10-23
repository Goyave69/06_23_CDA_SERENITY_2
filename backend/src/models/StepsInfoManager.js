const AbstractManager = require("./AbstractManager");

class StepsInfoManager extends AbstractManager {
  constructor() {
    super({ table: "steps_info" });
  }

  insert(stepsInfo) {
    return this.connection
      .query(
        `insert into ${this.table} (title, description, image, surgery_id) VALUES (?, ?, ?, ?)`,
        [
          stepsInfo.title,
          stepsInfo.description,
          stepsInfo.image,
          stepsInfo.surgery_id,
        ]
      )
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...stepsInfo } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }

  getBySurgeryId(surgeryId) {
    return this.connection
      .query(`select * from  ${this.table} where surgery_id = ?`, [surgeryId])
      .then(([rows]) => {
        return rows.length === 0
          ? { status: 404, message: {} }
          : { status: 200, message: rows };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = StepsInfoManager;
