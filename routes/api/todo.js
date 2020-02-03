const express = require("express");
const router = express.Router();
const knex = require("../../database/database");

router.get("/", async (req, res) => {
  try {
    const data = await knex
      .select("*")
      .from("todo")
      .orderBy("id", "desc");
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await knex("todo")
      .where("id", req.params.id)
      .first();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    // const todo = await knex("todo")
    //   .select("title")
    //   .where({ title: req.body.title });
    // if (todo.length < 1) {
    const data = await knex
      .insert(req.body)
      .into("todo")
      .returning("*");
    res.send(data);
    // } else {
    //   return res.status(400).json({ err: "Todo already exists" });
    // }
  } catch (err) {
    if (err.code === "23505") {
      return res.status(400).json({ err: "todo already exist" });
    }
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await knex("todo")
      .where({ id: req.params.id })
      .update({ title: req.body.title, is_done: req.body.is_done })
      .returning("*");
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await knex("todo")
      .where("id", req.params.id)
      .del();
    res.json({ msg: "Todo deleted" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
