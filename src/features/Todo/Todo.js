import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CreateTodo, selectTodos } from "../../Redux/Todo/TodoSlice";
import TodoItem from "./TodoItem";

export function Todo() {
  const TodoList = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    dispatch(
      CreateTodo({
        title: title,
        description: description,
        done: false,
        id: Date.now(),
      })
    );
    setTitle("");
    setDescription("");
  };

  return (
    <div className="App flex items-center justify-center min-h-screen p-5 w-full bg-slate-800">
      <div className="flex justify-center align-center w-2/4">
        <div className="shadow-lg p-4 bg-stone-300 rounded w-full">
          <ul className="space-y-2 mb-4">
            {TodoList.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
          <hr className="bg-black" />
          <div className="w-full">
            <h1 className="text-2xl py-2">New Todo:</h1>
            <label>Title:</label>
            <input
              className="p-2 rounded w-full my-2 outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>description:</label>
            <textarea
              className="w-full rounded outline-none p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button
              aria-label="Increment value"
              onClick={() => handleCreate()}
              className="p-2 rounded bg-green-600 mt-2 text-white"
            >
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
