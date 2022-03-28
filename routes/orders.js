const express = require("express");
const router = express.Router();
const { verifyToken } = require('../Service/Jwt')

const order = require("../models/order");

router.get("/", (req, res) => {
  order
    .getOrders(req.query)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving all orders from database");
    });
});

router.get("/:id", (req, res) => {
  order
    .getOrderById(req.params.id)
    .then((order) => {
      if (!order) res.status(404).json({ message: `order not found` });
      else res.status(200).json(order);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ message: "Error retrieving this order from database" });
    });
});

router.post("/", (req, res) => {
  const { id, order_bag, order_price, order_status, user_id } = req.body;
  order
    .createOrder(id, order_bag, order_price, order_status, user_id)
    .then((result) =>
      res.status(201).json({ message: "Order Created !", order: result })
    )
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: `Error saving the order` });
    });
});

module.exports = router;
