import { configureStore } from "@reduxjs/toolkit"
import expenseReducer from "./expense/expenseSlice"

const store = configureStore({
    reducer: {
        expense: expenseReducer
    },
});

export default store


