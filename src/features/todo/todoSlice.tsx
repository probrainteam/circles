import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../components/app/store";

interface TodoState {
  id: number;
  text: string;
  done: boolean;
}

export type TodosType = TodoState[];

const initialState: TodosType = [];

// TODO : id 수정필요
let id = 1;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push({
        id: id++,
        text: action.payload,
        done: false,
      });
    },
    remove: (state, action: PayloadAction<number>) =>
      state.filter((todo) => todo.id !== action.payload),
    toggle: (state, action: PayloadAction<number>) =>
      state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      ),
  },
});

export const { add, remove, toggle } = todoSlice.actions;
// export const selectTodo = (state: RootState) => state.todos;
export default todoSlice.reducer;
