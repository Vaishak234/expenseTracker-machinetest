import { LayoutDashboard, PieChart, PlusCircle } from "lucide-react";

export const sidebarNavItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/add-expense', icon: PlusCircle, label: 'Add Expense' },
    { path: '/insight', icon: PieChart, label: 'Insights' },
];

export const isActivePath = (path) => location.pathname === path;

export const expenseCategories = [
    'Food & Dining',
    'Transportation',
    'Shopping',
    'Entertainment',
    'Bills & Utilities',
    'Health',
    'Travel',
    'Other'
];


export const exportToCSV = (expenses) => {
  const csvContent = [
    'Date,Category,Amount,Description',
    ...expenses.map(({ date, category, amount, description }) =>
      `${date},${category},${amount},${description}`
    )
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob),
    download: `expenses-${new Date().toISOString().split('T')[0]}.csv`
  });
  a.click();
  URL.revokeObjectURL(a.href);
};
