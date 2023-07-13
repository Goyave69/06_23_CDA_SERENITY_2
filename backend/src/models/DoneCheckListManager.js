const AbstractManager = require("./AbstractManager");

class DoneCheckListManager extends AbstractManager {
  constructor() {
    super({ table: "done_check_list" });
  }

  insert(doneCheckList) {
    return this.connection
      .query(
        `insert into ${this.table} (is_checked, intervention_id, check_list_id) VALUES (?, ?, ?)`,
        [
          doneCheckList.is_checked,
          doneCheckList.intervention_id,
          doneCheckList.check_list_id,
        ]
      )
      .then(([rows]) => {
        return {
          status: 201,
          message: { id: rows.insertId, ...doneCheckList },
        };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = DoneCheckListManager;
