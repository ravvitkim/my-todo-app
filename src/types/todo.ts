// src/types/todo.ts
export type Todo = {
  id: number,
  text: string,
  completed: boolean,
  createdAt: Date
}

export type TodoFilter = 'all' | 'active' | 'completed';