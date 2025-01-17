import { useState, useEffect } from "react"
import "./styles.css"
import { ToDoItem } from "./ToDoItem"
function App(){
  const [newTodoName, setNewTodoName] = useState("")
  const [todos, setTodos] = useState([])

  function addNewTodo() {
    if (newTodoName === "") return

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ]
    })
    setNewTodoName("")
  }

  function toggleTodo(todoId, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo => {
        if(todo.id === todoId) return {...todo, completed}
        return todo
      })
    })
  }

  function deleteTodo(todoId){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== todoId)
    })
  }

  // useEffect(() => {
  //   console.log("Updated todos:", newTodoName);
  // }, [newTodoName]); 


  return (
    <>
    <ul id="list">
      {todos.map(todo => {

        return <ToDoItem key={todo.id}{...todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}/>


      })}

    </ul>
    <div id="new-todo-form">
      {JSON.stringify(todos)}
      <label htmlFor="todo-input">New Todo</label>
      <input 
      type="text"
       id="todo-input"
       value={newTodoName}
       onChange={e => setNewTodoName(e.target.value)} />
      <button onClick={addNewTodo}>Add Todo</button>
    </div>
    </>

    

)

}
export default App