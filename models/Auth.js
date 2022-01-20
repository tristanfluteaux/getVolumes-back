const connection = require("../db-config.js");
const db = connection.promise();

const findUsers = async () => {
  try {
    const users = await db.query("SELECT * FROM users");
    console.log(users);
    return users[0];
  } catch (error) {
    return Promise.reject(error);
  }
};

const findByEmail = async (email) => {
  try {
    const user = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return user[0][0];
  } catch (error) {
    return Promise.reject(error);
  }
};

const create = async (email, hashedPassword) => {
  try {
    const response = await db.query(
      "INSERT INTO users (email, user_password) VALUES (?, ?)",
      [email, hashedPassword]
    );
    console.log(response[0]);
    return response[0];
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = { findUsers, findByEmail, create };
