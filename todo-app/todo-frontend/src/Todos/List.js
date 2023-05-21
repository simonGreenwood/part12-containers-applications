import React from "react"
import Todo from "./Todo"
const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }
  todos.map((todo) => console.log(todo))
  return (
    <>
      {todos
        .map((todo) => {
          <Todo
            todo={todo}
            key={todo._id}
            onClickDelete={onClickDelete}
            onClickComplete={onClickComplete}
          />
        })
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
