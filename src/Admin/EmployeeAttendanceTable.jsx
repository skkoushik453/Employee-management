import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EmployeeAttendanceTable = ({ employees, setEmployees }) => {
  // Handle Check-in
  const handleCheckIn = (index) => {
    const updatedEmployees = employees.map((employee, empIndex) => {
      if (empIndex === index) {
        return { ...employee, checkInTime: new Date().toLocaleTimeString() };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  // Handle Check-out
  const handleCheckOut = (index) => {
    const updatedEmployees = employees.map((employee, empIndex) => {
      if (empIndex === index) {
        return { ...employee, checkOutTime: new Date().toLocaleTimeString() };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-3 font-medium">Name</th>
            <th className="pb-3 font-medium">Job Title</th>
            <th className="pb-3 font-medium">Department</th>
            <th className="pb-3 font-medium">Check-in Time</th>
            <th className="pb-3 font-medium">Check-out Time</th>
            <th className="pb-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <motion.tr
                key={index}
                className="border-b cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="py-4 flex items-center">
                  <input type="checkbox" className="mr-3 form-checkbox text-red-500" />
                  <img src={employee.image} alt={employee.name} className="w-8 h-8 rounded-full mr-3" />
                  <span className="font-medium">{employee.name}</span>
                </td>
                <td className="py-4 text-gray-600">{employee.position}</td>
                <td className="py-4 text-gray-600">{employee.department}</td>
                <td className="py-4 text-gray-600">{employee.checkInTime || 'N/A'}</td>
                <td className="py-4 text-gray-600">{employee.checkOutTime || 'N/A'}</td>
                <td className="py-4 text-gray-600">
                  {!employee.checkInTime ? (
                    <button
                      onClick={() => handleCheckIn(index)}
                      className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                    >
                      Check In
                    </button>
                  ) : !employee.checkOutTime ? (
                    <button
                      onClick={() => handleCheckOut(index)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                    >
                      Check Out
                    </button>
                  ) : (
                    <span className="text-gray-500">Completed</span>
                  )}
                </td>
              </motion.tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeAttendanceTable;
