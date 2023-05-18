const express = require("express")
const router = express.Router()
const redis = require("../redis")
const configs = require("../util/config")

/* GET index data. */
router.get("/", async (req, res) => {
  const visits = (await redis.getAsync("visits")) || 0
  redis.setAsync("visits", parseInt(visits) + 1)
  res.send({
    ...configs,
    visits: parseInt(visits),
  })
})

router.get("/statistics", async (req, res) => {
  const todos = (await redis.getAsync("todos")) || 1
  res.send({
    added_todos: parseInt(todos),
  })
})
module.exports = router
