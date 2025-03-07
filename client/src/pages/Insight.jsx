import { IndianRupee, PieChart, TrendingUp } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectExpense } from '../redux/expense/expenseSlice';

const dummyData = {
  averageExpense: 1200.5,
  activeCategories: 5,
  categoryTotals: {
    Food: 4000,
    Transport: 1500,
    Entertainment: 2500,
    Bills: 3000,
  },
  totalExpenses: 11000,
};


export default function Insight() {

  const expenses = useSelector(selectExpense)

  const categoryExpenses = expenses.reduce((total, expense) => {
    const category = expense.category
    const amount = expense.amount
    if (!total[category]) total[category] = 0
    total[category] += amount

    return total
  }, {})

  const expenseLimit = 10000;
  const totalCategories = Object.keys(categoryExpenses).length || 0
  const totalExpense = Object.values(categoryExpenses).reduce((total, category) => category + total, 0)



  return (
    <div className=" bg-gradient-to-b from-blue-50 to-white">

      <main className="container mx-auto py-6 space-y-8 px-4">

        {
          totalExpense > expenseLimit && (
            <div className="fixed bottom-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in">
              Your expenses have exceeded the limit of {expenseLimit}!
            </div>
          )
        }

        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-700">Average Expense</h2>
              <IndianRupee className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold mt-2">₹{totalExpense / totalCategories || 0}</div>
            <p className="text-xs text-gray-500">Per transaction average</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-700">Active Categories</h2>
              <PieChart className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold mt-2">{totalCategories}</div>
            <p className="text-xs text-gray-500">Spending categories this month</p>
          </div>
        </div>

        <div className="">
          <div>
            <div className="text-2xl font-bold mt-2 mb-4">Expense in categories</div>
          </div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>

            {
              categoryExpenses &&
              Object.entries(categoryExpenses).map(([category, amount]) => (
                <div key={category} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-700 capitalize">{category}</h2>
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold mt-2">₹{amount.toLocaleString()}</div>
                  <p className="text-xs text-gray-500">
                    {((amount / dummyData.totalExpenses) * 100).toFixed(1)}% of total spending
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </div>
  );
}
