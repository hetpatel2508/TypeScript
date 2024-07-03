import React, { useState } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { IoBackspace } from 'react-icons/io5';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completed: Todo[];
    setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const CompletedTodo: React.FC<Props> = ({ todo, todos, setTodos, completed, setCompleted }) => {


    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDelete = (id: number) => {
        const updatedTodos = todos.filter((item) => item.id !== id);
        setTodos(updatedTodos);
    };

    const handleUpdate = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        const updatedTodos = todos.map((item) =>
            item.id === id ? { ...item, todo: editTodo } : item
        );

        setTodos(updatedTodos);
        setEdit(false);
    };

    const handleBack = (id: number) => {
        // Find the completed todo item to move back to todos
        const todoToMoveBack = completed.find((item) => item.id === id);

        if (todoToMoveBack) {
            // Remove the todo from completed
            const updatedCompleted = completed.filter((item) => item.id !== id);
            setCompleted(updatedCompleted);

            // Add the todo back to todos
            setTodos([...todos, todoToMoveBack]);
        }
    };

    return (
        <div className='w-[95%] flex flex-wrap justify-between min-h-[50px] ml-4 mr-2.5 mb-5 text-2xl transition-all ease-in-out bg-yellow-500 hover:scale-[1.032]'>
            {todo.isDone ? (
                <s className='pl-4 pr-10 pt-2'>{todo.todo}</s>
            ) : (
                edit ? (
                    <form onSubmit={(e) => handleUpdate(e, todo.id)}>
                        <input
                            className='pl-4 h-full bg-yellow-500 text-black outline-none'
                            placeholder={todo.todo}
                            value={editTodo}
                            onChange={(e) => setEditTodo(e.target.value)}
                        />
                    </form>
                ) : (
                    <div className='pl-4 pr-10 pt-2'>{todo.todo}</div>
                )
            )}

            <div className='flex'>
                <span className='p-3' onClick={() => setEdit(!edit)}><AiFillEdit /></span>
                <span className='p-3' onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                <span className='p-3 mr-1.5' onClick={() => handleBack(todo.id)}><IoBackspace /></span>
            </div>
        </div>
    )
}

export default CompletedTodo
