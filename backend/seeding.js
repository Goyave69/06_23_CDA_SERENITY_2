require("dotenv").config();

const fs = require("fs");
const mysql = require("mysql2/promise");

const seeding = async () => {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await connection.query(`use ${DB_NAME}`);

  const sql = fs.readFileSync("./SQL/seeders.sql", "utf8");

  await connection.query(sql);

  connection.end();
};

try {
  seeding();
} catch (err) {
  console.error(err);
}
