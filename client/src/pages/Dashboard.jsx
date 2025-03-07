import React from 'react';
import { FileDown, IndianRupee, Tag } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectExpense, selectTotalAmount } from '../redux/expense/expenseSlice';
import { exportToCSV } from '../utils';
import ExpenseTable from '../components/ExpenseTable';




const Dashboard = () => {


  const expenses = useSelector(selectExpense)
  const totalSpending = useSelector(selectTotalAmount)

  const categoryExpense = expenses.reduce((total ,expense)=>{
    const category = expense.category
    const amount = expense.amount
    if(!total[category]) total[category] = 0
    total[category] += amount
    return total
    },{})

  
  const mostSpendedCategory = Object.keys(categoryExpense).sort((a,b)=>categoryExpense[b]-categoryExpense[a])[0]
  
  

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800  mb-4">
            Overview
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 ">Total Spending</p>
              <p className="text-3xl font-bold text-indigo-600 ">
                ₹{totalSpending}
              </p>
            </div>
            <IndianRupee className="w-12 h-12 text-indigo-200 " />
          </div>
        </div>

        {mostSpendedCategory && (
          <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800  mb-4">
              Spending Insight
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 ">
                You spent the most on <span className="font-semibold text-indigo-600">{mostSpendedCategory}</span> this month!
              </p>
              <Tag className="w-12 h-12 text-indigo-200 " />
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-bold text-gray-800 ">Recent Expenses</h2>
        <button
          onClick={()=>exportToCSV(expenses)}
          className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          <FileDown className="w-4 h-4" />
          <span>Export CSV</span>
        </button>
      </div>

      <div className="bg-white shadow-md overflow-hidden ">
        <div className="overflow-x-auto">

           <ExpenseTable />
           
        </div>
      </div>
    </div>
  );
};

export default Dashboard;