import "./App.css"
import TodoView from "./Todos/TodoView"
function App() {
  return (
    <div className="App">
      <TodoView />
      {console.log(process.env.REACT_APP_BACKEND_URL)}
    </div>
  )
}

export default App
