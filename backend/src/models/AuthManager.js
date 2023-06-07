const { passwordVerification } = require("../services/PasswordHelper");
const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "auth" });
  }

  login({ email, password }) {
    return this.connection
      .query(`SELECT * FROM user WHERE email = ?`, [email])
      .then(async ([rows]) => {
        if (rows.length === 0) {
          return { status: 401, message: "Email ou mot de passe invalide" };
        }
        if (!(await passwordVerification(password, rows[0].password))) {
          return { status: 401, message: "Email ou mot de passe invalide" };
        }
        return { status: 200, message: "Password et email valid" };
      });
  }
}
module.exports = AuthManager;
