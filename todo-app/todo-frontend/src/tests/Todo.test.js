import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Todo from "../Todos/Todo"
describe("Test the todo component", () => {
  it("should render the todo component", () => {
    const mockDeleteHandler = jest.fn()
    const mockCompleteHandler = jest.fn()
    render(
      <Todo
        todo={{ text: "test", done: false }}
        onClickDelete={mockDeleteHandler}
        onClickComplete={mockCompleteHandler}
      />
    )

    expect(screen.getByText("test")).toBeInTheDocument()
    expect(screen.getByText("This todo is not done")).toBeInTheDocument()

    const completedButton = screen.getByText("Set as done")
    userEvent.click(completedButton)
    expect(mockCompleteHandler).toHaveBeenCalledTimes(1)

    const deleteButton = screen.getByText("Delete")
    userEvent.click(deleteButton)
  })
})
