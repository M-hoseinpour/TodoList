import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user : "",
  todoList: [{
    title: "Hire mohammad",
    description : "After Cheking the project Invite him for the interview.",
    done: false,
    createdAt: Date.now(),
    id : 1
  }]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    CreateTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    ToggleDone: (state, action) => {
      const index = state.todoList.findIndex((todo) => todo.id === action.payload.id);
      state.todoList[index].done = action.payload.done
    },
    DeleteTodo: (state, action) => {
     state.todoList = state.todoList.filter((todo) => todo.id !== action.payload.id);
    },
    EditTodoList: (state, action) => {
      const index = state.todoList.findIndex((todo) => todo.id === action.payload.id);
      state.todoList[index].title = action.payload.title;
      state.todoList[index].description = action.payload.description;
    },
    CreateAccount: (state, action) => {
        state.user = action.payload
    }
  },
});

export const { CreateTodo, ToggleDone, DeleteTodo, EditTodoList, CreateAccount } = todoSlice.actions;

export const selectTodos = (state) => state.todo.todoList;
export const selectUser = (state) => state.todo.user;

export default todoSlice.reducer;
