const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "item" });
  }

  insert(item) {
    return this.connection
      .query(`insert into ${this.table} (title) values (?)`, [item.title])
      .then(([rows]) => {
        return { status: 201, message: { id: rows.insertId, ...item } };
      })
      .catch((err) => {
        console.error(err);
        return { status: 500, message: "Error" };
      });
  }
}

module.exports = ItemManager;
