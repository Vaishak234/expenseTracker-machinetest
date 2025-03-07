import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Plus, Calendar, Tag, DollarSign, FileText } from 'lucide-react';
import { expenseCategories } from '../utils';
import { expenseSchema } from '../schema/expenseSchema';
import { useDispatch } from 'react-redux'
import { addExpense } from '../redux/expense/expenseSlice';
import toast from 'react-hot-toast';

const AddExpenseForm = () => {
    const [selectedCategory, setSelectedCategory] = useState('Food & Dining');
    const dispatch = useDispatch();


    const initialValues = {
        amount: '',
        date: new Date().toISOString().split('T')[0],
        category: selectedCategory,
        description: ''
    }

    const handleSelectCategory = (category) => {

        setSelectedCategory(category);
        formik.setFieldValue('category', category);
    }

    const onSubmit = (values) => {
        try {

            dispatch(addExpense(values))
            toast.success('Expense added successfully');
            formik.resetForm()
        } catch (error) {
            console.log(error);

        }
    }

    const formik = useFormik({
        initialValues,
        validationSchema: expenseSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit,
    });


    return (
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Amount Input */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Amount</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <DollarSign className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="number"
                            min={0}
                            className="block w-full pl-10 pr-3 py-2.5 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="0.00"
                            {...formik.getFieldProps('amount')}
                        />
                    </div>
                    {formik.touched.amount && formik.errors.amount && <p className="text-red-500 text-sm">{formik.errors.amount}</p>}
                </div>

                {/* Date Input */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Date</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="date"
                            className="block w-full pl-10 pr-3 py-2.5 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            {...formik.getFieldProps('date')}
                        />
                    </div>
                    {formik.touched.date && formik.errors.date && <p className="text-red-500 text-sm">{formik.errors.date}</p>}
                </div>
            </div>

            {/* Category Selection */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {expenseCategories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => handleSelectCategory(category)}
                            className={`flex items-center space-x-2 p-3 rounded-lg border ${selectedCategory === category ? 'border-indigo-500 bg-indigo-50 text-indigo-600' : 'border-gray-300 hover:bg-gray-50'}`}
                        >
                            <Tag className="h-5 w-5" />
                            <span className="text-sm font-medium">{category}</span>
                        </button>
                    ))}
                </div>
                {formik.touched.category && formik.errors.category && <p className="text-red-500 text-sm">{formik.errors.category}</p>}
            </div>

            {/* Description Input */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Add a description"
                        {...formik.getFieldProps('description')}
                    />
                </div>
                {formik.touched.description && formik.errors.description && <p className="text-red-500 text-sm">{formik.errors.description}</p>}
            </div>

            <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                <Plus className="h-5 w-5" />
                <span>Add Expense</span>
            </button>
        </form>
    );
};

export default AddExpenseForm;
