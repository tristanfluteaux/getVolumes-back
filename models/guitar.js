const connection = require("../db-config");
const Joi = require("joi");

const db = connection.promise();

//Get all from concept
const getGuitars = () => {
  let sql = "SELECT * FROM guitars";
  return db.query(sql).then(([results]) => results);
};

const getById = (id) => {
  let sql = "SELECT * FROM guitars WHERE id LIKE ?";
  return db.query(sql, [id]).then(([results]) => results[0]);
};
const getByType = (type) => {
  let sql = "SELECT * FROM guitars WHERE type LIKE ?";
  return db.query(sql, [type]).then(([results]) => results);
};

const findByName = (name) => {
  let sql = "SELECT * FROM guitars WHERE name LIKE ?";
  return db.query(sql, [name]).then(([results]) => results);
};


module.exports = {
  getGuitars,
  getById,
  getByType,
  findByName
};
