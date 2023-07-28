import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state,action){
            state.todoList.push(action.payload)
        } ,
        deleteTodo(state,action){
            state.todoList.filter(el => el.id !== action.payload)
        },
    
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer