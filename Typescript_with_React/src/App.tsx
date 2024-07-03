import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './model';
import TodoList from './Components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completed, setCompleted] = useState<Todo[]>([{id:25454,todo:"aefuaeinc",isDone:false}]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };


  return (
      <div className='bg-blue-500 w-full min-h-screen'>
        <div className='text-white text-center font-serif text-5xl pt-10 pb-10'>TASKIFY</div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} completed={completed} setCompleted={setCompleted} />
      </div>
  );
};

export default App;
