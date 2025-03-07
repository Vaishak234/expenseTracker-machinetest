import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeExpense, selectExpense } from '../redux/expense/expenseSlice'
import toast from 'react-hot-toast'
import { Trash } from 'lucide-react'

const ExpenseTable = () => {

    const dispatch = useDispatch()
    const expenses = useSelector(selectExpense)

    const deleteExpense = (id) => {
        dispatch(removeExpense(id))
        toast.success('Expense removed')
    }


    return (
        <table className="w-full">
            <thead>
                <tr className="bg-gray-50 ">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            {
                expenses.length > 0 ? (
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-600 w-full">

                        {expenses?.map(expense => (
                            <tr key={expense.id} className="hover:bg-gray-50 ">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                    {new Date(expense.date).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="p-2 px-4 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800 ">
                                        {expense.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                    ₹{expense.amount.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                    {expense.description || 'no description'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                    <button className="p-2 rounded-lg text-gray-600  hover:bg-gray-100  focus:outline-none" onClick={() => deleteExpense(expense.id)}>
                                        <Trash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    <p className='flex justify-center items-center w-full p-2'>No Expenses Found</p>
                )
            }
        </table>
    )
}

export default ExpenseTable
