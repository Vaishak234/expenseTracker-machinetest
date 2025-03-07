import { createSelector, createSlice } from '@reduxjs/toolkit';
import {v4 as uuid }from 'uuid';

const initialState = {
    expenses: [],
};

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            const newExpense ={ id: uuid(), ...action.payload }
            state.expenses.push(newExpense);
            localStorage.setItem('expenses',JSON.stringify([...state.expenses , newExpense]))
        },
        removeExpense: (state, action) => {
            const newState = state.expenses.filter(expense => expense.id !== action.payload);
            state.expenses = newState
            localStorage.setItem('expenses',JSON.stringify(newState))
        },
        setExpense: (state) => {
            const initialData = JSON.parse(localStorage.getItem('expenses')) || []
            state.expenses = initialData
        }
    }
});

export const selectExpense = (state) => state.expense.expenses;
export const selectTotalAmount = createSelector(
  [selectExpense],
  (expenses) => expenses?.reduce((total, expense) => total + expense.amount, 0)
);
export const { addExpense, removeExpense, setExpense } = expenseSlice.actions;
export default expenseSlice.reducer;

