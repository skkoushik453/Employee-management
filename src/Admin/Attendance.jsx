import React from 'react';
import { motion } from 'framer-motion';

const Attendance = ({ employees, handleCheckIn, handleCheckOut }) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Employee Attendance</h2>
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-3 font-medium">Name</th>
            <th className="pb-3 font-medium">Position</th>
            <th className="pb-3 font-medium">Department</th>
            <th className="pb-3 font-medium">Check-in Time</th>
            <th className="pb-3 font-medium">Check-out Time</th>
            <th className="pb-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <motion.tr key={index} className="border-b">
              <td className="py-4">{employee.name}</td>
              <td className="py-4">{employee.position}</td>
              <td className="py-4">{employee.department}</td>
              <td className="py-4">{employee.checkInTime || 'N/A'}</td>
              <td className="py-4">{employee.checkOutTime || 'N/A'}</td>
              <td className="py-4">
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
                  'Completed'
                )}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
