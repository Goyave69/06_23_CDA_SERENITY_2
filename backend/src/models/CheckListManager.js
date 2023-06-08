const AbstractManager = require("./AbstractManager");

class CheckListManager extends AbstractManager {
  constructor() {
    super({ table: "check_list" });
  }

  insert(checkList) {
    return this.connection
      .query(
        `insert into ${this.table} (identity_card, vital_card, blue_card, anesthesia_appointment,appointment_id) VALUES (?, ?, ?, ?, ?)`,
        [
          checkList.identity_card,
          checkList.vital_card,
          checkList.blue_card,
          checkList.anesthesia_appointment,
          checkList.appointment_id,
        ]
      )
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
