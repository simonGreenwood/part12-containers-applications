const express = require("express")
const { Todo } = require("../mongo")
const redis = require("../redis")
const router = express.Router()

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos)
})

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todos = (await redis.getAsync("todos")) || 0
  redis.setAsync("todos", parseInt(todos) + 1)
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  })
  res.send(todo)
})

/* GET specific todo */
router.get("/:id", async (req, res) => {
  const id = req.params.id
  const todo = await Todo.findOne({ _id: id })
  res.send(todo)
})

router.put("/:id", async (req, res) => {
  const id = req.params.id
  const { text, done } = req.body
  console.log(text, done)
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { text, done },
    { new: true }
  )
  res.send(updatedTodo)
})
const singleRouter = express.Router()

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200)
})

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  res.sendStatus(405) // Implement this
})

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  res.sendStatus(405) // Implement this
})

router.use("/:id", findByIdMiddleware, singleRouter)

module.exports = router
