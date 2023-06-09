const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const AbstractManager = require("./AbstractManager");
const { passwordVerification } = require("../services/PasswordHelper");

const privateKeyPath = path.join(__dirname, "../../jwtRS256.key");
const privateKey = fs.readFileSync(privateKeyPath);

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
        const token = jwt.sign({ userId: rows[0].id }, privateKey, {
          algorithm: "RS256",
        });
        return { status: 200, message: { token } };
      });
  }
}
module.exports = AuthManager;
