import * as Yup from 'yup';

export const expenseSchema = Yup.object({
    amount: Yup.number().positive('Amount must be positive').required('Amount is required'),
    date: Yup.date().required('Date is required'),
    category: Yup.string().required('Category is required'),
    description: Yup.string().min(3, 'Description should be at least 3 characters')
});
