import React from "react";

interface myPrope {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

// const InputFeild:React.FC = ({todo ,setTodo}:myPrope) => {
//or
const InputFeild: React.FC<myPrope> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div>
      <div className="w-[520px] ml-[34%] bg-white border rounded-full relative">
        <form onSubmit={handleAdd}>
          <input type="text" className="w-[450px] h-[55px] rounded-full text-2xl pl-7" placeholder="Enter a Task" value={todo} onChange={(e:React.ChangeEvent<HTMLInputElement>) => { setTodo(e.target.value) }}/>
          <button className="bg-blue-600 p-3 rounded-full absolute right-[5px] top-[4px] text-white" > Go </button>
        </form>
      </div>
    </div>
  );
};

export default InputFeild;
