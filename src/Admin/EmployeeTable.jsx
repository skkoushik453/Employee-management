import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EmployeeModal from './EmployeeModal'; // Assuming you have this modal component for editing employee details

const EmployeeTable = ({ employees, setEmployees }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Track the selected employee
  const [isEditing, setIsEditing] = useState(false); // Track whether we are in edit mode

  // Close the modal by resetting selectedEmployee and editing state
  const closeModal = () => {
    setSelectedEmployee(null);
    setIsEditing(false);
  };

  // Handle input change when editing employee details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedEmployee((prev) => ({ ...prev, [name]: value }));
  };

  // Save updated employee details
  const saveChanges = () => {
    const updatedEmployees = employees.map((employee) =>
      employee.name === selectedEmployee.name ? selectedEmployee : employee
    );
    setEmployees(updatedEmployees); // Update the employee list with new details
    closeModal(); // Close the modal after saving
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-3 font-medium">Name</th>
            <th className="pb-3 font-medium">Job Title</th>
            <th className="pb-3 font-medium">Department</th>
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
                onClick={() => setSelectedEmployee(employee)} // Set the selected employee on click
              >
                <td className="py-4 flex items-center">
                  <input type="checkbox" className="mr-3 form-checkbox text-red-500" />
                  <img src={employee.image} alt={employee.name} className="w-8 h-8 rounded-full mr-3" />
                  <span className="font-medium">{employee.name}</span>
                </td>
                <td className="py-4 text-gray-600">{employee.position}</td>
                <td className="py-4 text-gray-600">{employee.department}</td>
              </motion.tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-500">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Show the EmployeeModal only when an employee is selected */}
      {selectedEmployee && (
        <EmployeeModal
          employee={selectedEmployee}
          closeModal={closeModal}
          handleInputChange={handleInputChange}
          saveChanges={saveChanges}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default EmployeeTable;
