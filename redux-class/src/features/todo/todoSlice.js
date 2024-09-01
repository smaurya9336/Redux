import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: "abc", task: "demo-task", isDone: false}],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) =>{
           state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markAsDone: (state, action) =>{
            const todo = state.find(todo => todo.id === action.payload);
          if (todo) {
             todo.isDone = true;
         }
           },
    },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;