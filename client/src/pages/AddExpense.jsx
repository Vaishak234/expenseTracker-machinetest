import AddExpenseForm from '../components/AddExpenseForm';



const AddExpense = () => {
   

    return (
        <div className="max-w-4xl mx-auto mt-[50px]">
            <div className="bg-white rounded-xl shadow-sm p-6 border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Add New Expense</h2>

                <AddExpenseForm/>

            </div>

    
        </div>
    );
}

export default AddExpense;