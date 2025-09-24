import type { Todo, TodoFilter } from '@/types/todo';
import TodoItem from "@/components/TodoItem";
import { useState } from "react";
import React from 'react';
import './TodoApp.css'

function TodoApp(){
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState<TodoFilter>('all')

  const addTodo = ()=>{
    if(inputValue.trim() === '') return;

    const newTodo:Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
      createdAt: new Date()
    }

    setTodos([... todos, newTodo]);
    setInputValue('')
  };

  const toggleTodo = (id: number)=> {
    setTodos(todos.map(todo => 
      todo.id === id? {... todo, completed: !todo.completed}: todo)
    );
  };

  const deleteTodo = (id:number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const filteredTodos = todos.filter(todo => {
    switch (filter){
      case 'active': return !todo.completed;
      case 'completed': return todo.completed;
      default: return true;
    }
  });

  return (
    <div className="todo-app">
      <h1>할 일 목록</h1>

      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="새 할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>

      <div className="todo-filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          전체
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          진행 중
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          완료됨
        </button>
      </div>

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default React.memo(TodoApp);