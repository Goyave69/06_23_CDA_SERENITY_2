const AbstractManager = require("./AbstractManager");

class CheckListManager extends AbstractManager {
  constructor() {
    super({ table: "check_list" });
  }

  insert(checkList) {
    return this.connection
      .query(`insert into ${this.table} (name, subtext) VALUES (?, ?)`, [
        checkList.name,
        checkList.subtext,
      ])
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...checkList } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = CheckListManager;
