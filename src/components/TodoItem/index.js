// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item-container">
      <p className="todo-item--title"> {title} </p>

      <button className="todos-item-name" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
