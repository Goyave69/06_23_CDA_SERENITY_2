const AbstractManager = require("./AbstractManager");

class SpecialityManager extends AbstractManager {
  constructor() {
    super({ table: "speciality" });
  }

  async insert(speciality) {
    return this.connection
      .query(`insert into ${this.table} (name) VALUES (?)`, [speciality.name])
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...speciality } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }

  update(data, id) {
    let sqlQuery = `UPDATE ${this.table} SET `;

    const keys = Object.keys(data);
    for (const key in keys) {
      if (keys[key] !== "roles") {
        sqlQuery += `${keys[key]} = ?, `;
      }
    }

    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

    let sqlData = [];

    if (data.roles) {
      sqlQuery += `, roles = ?`;
      const { roles, ...newData } = data;
      sqlData = [...Object.values(newData), JSON.stringify(roles), id];
    } else {
      sqlData = [...Object.values(data), id];
    }

    sqlQuery += ` WHERE id = ?`;

    const bodyResponse = { id, ...data };

    return this.connection
      .query(sqlQuery, sqlData)
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
}

module.exports = SpecialityManager;
