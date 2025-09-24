// src/components/TodoItem/index.tsx
import type { Todo } from "@/types/todo"
import React from 'react'


type TodoItemProps = {
  todo: Todo,
  onToggle: (id: number) => void,
  onDelete: (id: number) => void
}

function TodoItem({todo, onToggle, onDelete}: TodoItemProps){
  return(
    <div className={`todo-item ${todo.completed? 'completed': ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={()=>{onToggle(todo.id)}}
      />
      <span>{todo.text}</span>
      <button onClick={()=>{onDelete(todo.id)}}>삭제</button>
    </div>
  )
}
export default React.memo(TodoItem)

