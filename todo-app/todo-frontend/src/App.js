import "./App.css"
import TodoView from "./Todos/TodoView"
function App() {
  return (
    <div className="App">
      <TodoView />
      {console.log(process.env)}
    </div>
  )
}

export default App
