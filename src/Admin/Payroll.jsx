// src/Payroll.js
import React, { useState } from 'react';

const Payroll = ({ handleGenerateReceipt }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [salaryDate, setSalaryDate] = useState('');
  const [salary, setSalary] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payrollData = {
      accountNumber,
      salaryDate,
      salary,
      amount,
    };
    handleGenerateReceipt(payrollData); // Pass the data to the parent
    // Reset the form
    setAccountNumber('');
    setSalaryDate('');
    setSalary('');
    setAmount('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Generate Payroll Receipt</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Account Number</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Salary Date</label>
          <input
            type="date"
            value={salaryDate}
            onChange={(e) => setSalaryDate(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Salary</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-red-500 text-white p-2 rounded">
          Generate Receipt
        </button>
      </form>
    </div>
  );
};

export default Payroll;
