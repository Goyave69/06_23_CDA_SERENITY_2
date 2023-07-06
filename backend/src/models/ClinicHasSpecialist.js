const AbstractManager = require("./AbstractManager");

class ClinicHasSpecialist extends AbstractManager {
  constructor() {
    super({ table: "clinic_has_specialist" });
  }

  updateClinic(data, id) {
    let sqlQuery = `UPDATE ${this.table} SET `;

    const keys = Object.keys(data);
    for (const key in keys) {
      if (id != null) {
        // ESLint est embétant. Changer pour Condition avec Entity ???
        sqlQuery += `${keys[key]} = ?, `;
      }
    }

    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

    sqlQuery += ` WHERE specialist_id = ?`;

    const bodyResponse = { id, ...data };

    return this.connection
      .query(sqlQuery, [...Object.values(data), id])
      .then(async ([rows]) => {
        return rows.affectedRows === 0
          ? { status: 404, message: {} }
          : { status: 201, message: bodyResponse };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }

  setConnection(connection) {
    this.connection = connection;
  }
}
module.exports = ClinicHasSpecialist;
