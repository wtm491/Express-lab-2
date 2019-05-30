const express = require("express");
const cartItems = express.Router();
//const cartData = require(`./cart_data`); 

const pg = require("pg");
const pool = new pg.Pool({
  user: "postgres",
  password: "rubiX43Q",
  host: "localhost",
  port: 5432,
  database: "ExpressShopDB",
  ssl: false
});


cartItems.get("/", (req, res) => {
    console.log("Cart Data:  ")
    pool.query("SELECT * FROM ShoppingCart;")
    .then((result) => {
        res.send(result.rows);
    })
    // res.send("Selected all: ");
    // res.send(cartData);
});


cartItems.post("/", (req, res) => {
    console.log(req.body); 
    let data = req.body; 
    pool.query("INSERT INTO ShoppingCart (id, product, price, quantity)  values($1::int, $2::text, $3::int, $4::int)", [data.id, data.product, data.price, data.quantity])
    .then(() => {
        res.status(201);  // Created
        res.send("Added Cart Item");
    });
});


cartItems.put("/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    pool.query(
        "UPDATE ShoppingCart SET quantity=$4::smallint WHERE id=$1::int", 
        [req.params.id, data.quantity]
    )
    res.send("Updated Cart Item");
});


cartItems.delete("/:id", (req, res) => {
    console.log(req.params.id);
    pool.query("DELETE FROM ShoppingCart (id, product, price, quantity)  values($1::int, $2::text, $3::int, $4::int)", [data.id, data.product, data.price, data.quantity])
    .then(() => {
        res.status(201); //Deleted

        res.send("Deleted cart item");
    });
});

module.exports = cartItems;