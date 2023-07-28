const AbstractManager = require("./AbstractManager");

class ReadStepsInfoManager extends AbstractManager {
  constructor() {
    super({ table: "read_steps_info" });
  }

  insert(readStepsInfo) {
    return this.connection
      .query(
        `insert into ${this.table} (is_checked, steps_info_id, intervention_id) VALUES (?, ?, ?)`,
        [
          readStepsInfo.is_checked,
          readStepsInfo.steps_info_id,
          readStepsInfo.intervention_id,
        ]
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

  getByInterventionId(interventionId) {
    return this.connection
      .query(
        `select ${this.table}.id, is_checked, si.id as stepInfoId, si.title, si.description, si.image from ${this.table} 
        JOIN steps_info as si on si.id = ${this.table}.steps_info_id 
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
    let sqlQuery = `insert into ${this.table} (steps_info_id, intervention_id) VALUES `;

    const values = [];

    data.forEach((rsi) => {
      sqlQuery += "(?, ?), ";
      values.push(rsi.steps_info_id, rsi.intervention_id);
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

module.exports = ReadStepsInfoManager;
