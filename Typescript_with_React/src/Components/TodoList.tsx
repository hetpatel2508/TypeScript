import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import CompletedTodo from './CompletedTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completed: Todo[];
  setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completed, setCompleted }) => {
  return (
    <div className='flex mt-10'>
          <div className='w-[47%] mx-8 bg-cyan-300'>
            <div className='text-slate-900 text-center text-5xl py-6'>Active Tasks</div>
            {todos.map((ele) => (
              <SingleTodo
                key={ele.id}
                todo={ele}
                todos={todos}
                setTodos={setTodos}
                completed={completed}
                setCompleted={setCompleted}
              />
            ))}
          </div>

          <div className='w-[47%] mx-8 bg-red-400' >
            <div className='text-slate-900 text-center text-5xl py-6'>Completed Tasks</div>
            {completed.map((ele) => (
              <CompletedTodo
              key={ele.id}
              todo={ele}
              todos={todos}
              setTodos={setTodos}
              completed={completed}
              setCompleted={setCompleted}
              />
            ))}
          </div>
    </div>
  );
};

export default TodoList;
