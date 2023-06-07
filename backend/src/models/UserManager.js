const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection
      .query(
        `insert into ${this.table} (firstname, lastname, email, password, roles) VALUES (?, ?, ?, ?, ?)`,
        [
          user.firstname,
          user.lastname,
          user.email,
          user.password,
          JSON.stringify(user.roles),
        ]
      )
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...user } };
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
      if (id != null) {
        // ESLint est embétant. Changer pour Condition avec Entity ???
        sqlQuery += `${keys[key]} = ?, `;
      }
    }

    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

    sqlQuery += ` WHERE id = ?`;

    const bodyResponse = { id, ...data };
    const { roles, ...newData } = data;

    return this.connection
      .query(sqlQuery, [...Object.values(newData), JSON.stringify(roles), id])
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

module.exports = UserManager;
