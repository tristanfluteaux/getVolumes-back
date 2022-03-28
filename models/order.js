const connection = require("../db-config");
const Joi = require("joi");

const db = connection.promise();

//Get all orders
const getOrders = () => {
  let sql = "SELECT * FROM orders";
  return db.query(sql).then(([results]) => results);
};

const getOrderById = (id) => {
  let sql = "SELECT * FROM orders WHERE id LIKE ?";
  return db.query(sql, [id]).then(([results]) => results[0]);
};

const createOrder = (id, order_bag, order_price, order_status, user_id) => {
  return db
    .query("INSERT INTO orders SET ?", {
        order_bag,
        order_price,
        order_status,
        user_id,
    })
    .then(([result]) => {
      const id = result.insertId;
      return { order_bag, order_price, order_status, id, user_id };
    });
};

module.exports = { getOrders, getOrderById, createOrder };
