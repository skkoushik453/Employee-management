// src/SalaryAdjustment.js
import React, { useState } from 'react';

const SalaryAdjustment = () => {
  const [adjustmentData, setAdjustmentData] = useState({
    employeeId: '',
    adjustmentAmount: '',
    reason: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdjustmentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Salary Adjustment Data Submitted: ", adjustmentData);
    // Add functionality to handle the salary adjustment here
    setAdjustmentData({ employeeId: '', adjustmentAmount: '', reason: '' }); // Reset form
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Salary Adjustment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Employee ID:</label>
          <input 
            type="text" 
            name="employeeId" 
            value={adjustmentData.employeeId} 
            onChange={handleInputChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Adjustment Amount:</label>
          <input 
            type="number" 
            name="adjustmentAmount" 
            value={adjustmentData.adjustmentAmount} 
            onChange={handleInputChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Reason:</label>
          <textarea 
            name="reason" 
            value={adjustmentData.reason} 
            onChange={handleInputChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Adjustment</button>
      </form>
    </div>
  );
};

export default SalaryAdjustment;
