import {createSlice} from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";


export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [{
            id:1,
            title: "Learn React",
            completed: true,
        },
        {
            id:2,
            title: "Learn JavaScript",
            completed: false,
        }],
    },
    reducers:{
      addTodo : (state,action) => {
         state.items.push( action.payload )
      }, 
      toggle : (state,action) => {
        const {id} = action.payload;
        const item = state.items.find(item => item.id === id);

        item.completed = !item.completed;
      }
    },
})

export const { addTodo,toggle } = todosSlice.actions;
export default todosSlice.reducer;