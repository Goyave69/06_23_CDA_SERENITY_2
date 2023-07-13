const AbstractManager = require("./AbstractManager");

class DoneAdministrativeManager extends AbstractManager {
  constructor() {
    super({ table: "done_administrative" });
  }

  insert(doneAdministrative) {
    return this.connection
      .query(
        `insert into ${this.table} (is_checked, category, intervention_id) VALUES (?, ?, ?)`,
        [
          doneAdministrative.is_checked,
          doneAdministrative.category,
          doneAdministrative.intervention_id,
        ]
      )
      .then(([rows]) => {
        return {
          status: 201,
          message: { id: rows.insertId, ...doneAdministrative },
        };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = DoneAdministrativeManager;
