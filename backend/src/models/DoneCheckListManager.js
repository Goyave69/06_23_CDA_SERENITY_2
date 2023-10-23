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

  getByInterventionId(interventionId) {
    return this.connection
      .query(
        `select ${this.table}.id, is_checked, cl.name, cl.subtext from ${this.table} 
        JOIN check_list as cl on cl.id = ${this.table}.check_list_id 
        where intervention_id = ?`,
        [interventionId]
      )
      .then(([rows]) => {
        return { status: 200, message: rows };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }

  insertMultiple(data) {
    let sqlQuery = `insert into ${this.table} (check_list_id, intervention_id) VALUES `;

    const values = [];

    data.forEach((dcl) => {
      sqlQuery += "(?, ?), ";
      values.push(dcl.check_list_id, dcl.intervention_id);
    });

    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

    return this.connection
      .query(sqlQuery, values)
      .then(([res]) => {
        return {
          status: 201,
          message: res,
        };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = DoneCheckListManager;
