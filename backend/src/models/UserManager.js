const AbstractManager = require("./AbstractManager");
const { passwordHasher } = require("../services/PasswordHelper");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection
      .query(
        `select firstname, lastname, email, roles from  ${this.table} where id = ?`,
        [id]
      )
      .then(([rows]) => {
        return rows.length === 0
          ? { status: 404, message: {} }
          : { status: 200, message: rows[0] };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }

  findAll() {
    return this.connection
      .query(`select id,firstname, lastname, email, roles from  ${this.table}`)
      .then(([rows]) => {
        return { status: 200, message: rows };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }

  async insert(user) {
    return this.connection
      .query(
        `insert into ${this.table} (firstname, lastname, email, password, roles) VALUES (?, ?, ?, ?, ?)`,
        [
          user.firstname,
          user.lastname,
          user.email,
          await passwordHasher(user.password),
          JSON.stringify(user.roles),
        ]
      )
      .then(([rows]) => {
        return {
          status: 201,
          message: {
            id: rows.insertId,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            roles: user.roles,
          },
        };
      })
      .catch((err) => {
        console.error(err);
        return {
          status: 500,
          message: err.errno === 1062 ? "Cet email existe déja" : "Error",
        };
      });
  }

  async update(body, id) {
    let sqlQuery = `UPDATE ${this.table} SET `;

    // v Because of ESLint
    const data = body;

    if (data.password) {
      data.password = await passwordHasher(data.password);
    }

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
    delete bodyResponse.password;

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

module.exports = UserManager;
