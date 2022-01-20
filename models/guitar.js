const connection = require("../db-config");
const Joi = require("joi");

const db = connection.promise();

//Get all from concept
const getGuitars = () => {
  let sql = "SELECT * FROM guitars";
  return db.query(sql).then(([results]) => results);
};

const getById = (id) => {
  let sql = "SELECT * FROM guitars WHERE id = ?";
  return db.query(sql, [id]).then(([results]) => results[0]);
};

module.exports = {
  getGuitars,
  getById
};
