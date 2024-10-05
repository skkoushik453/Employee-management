// src/EmployeeManagement.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EmployeeForm from './EmployeeForm';
import EmployeeDashboard from './EmployeeDashboard';
import Header from './Header';
import EmployeeTable from './EmployeeTable';
import Attendance from './Attendance';
import LeaveForm from './LeaveForm';
import Calendar from './calendar'; // Import the Calendar component
import Payroll from './Payroll'; // Import the Payroll component
import SalaryAdjustment from './SalaryAdjustment'; // Import Salary Adjustment component
import AnnualSalaryStatement from './AnnualSalaryStatement'; // Import Annual Salary Statement component

const EmployeeManagement = () => {
  const [activeItem, setActiveItem] = useState('Employee');
  const [activeView, setActiveView] = useState('Manage Employee');
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [isAddingLeave, setIsAddingLeave] = useState(false);
  const [isGeneratingPayroll, setIsGeneratingPayroll] = useState(false); // New state for payroll
  const [employees, setEmployees] = useState([
    { name: 'Ryan Harris', image: '/api/placeholder/32/32', position: 'Finance Manager', department: 'Finance', checkInTime: null, checkOutTime: null },
    { name: 'Michael King', image: '/api/placeholder/32/32', position: 'HR Manager', department: 'HR', checkInTime: null, checkOutTime: null },
    { name: 'Deborah Brown', image: '/api/placeholder/32/32', position: 'IT Helpdesk', department: 'IT', checkInTime: null, checkOutTime: null },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    department: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    setEmployees((prev) => [...prev, { ...newEmployee, id: Date.now(), checkInTime: null, checkOutTime: null }]);
    setNewEmployee({ name: '', position: '', department: '', email: '', phone: '' });
    setIsAddingEmployee(false);
  };

  const handleCheckIn = (index) => {
    const updatedEmployees = employees.map((employee, empIndex) => {
      if (empIndex === index) {
        return { ...employee, checkInTime: new Date().toLocaleTimeString() };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  const handleCheckOut = (index) => {
    const updatedEmployees = employees.map((employee, empIndex) => {
      if (empIndex === index) {
        return { ...employee, checkOutTime: new Date().toLocaleTimeString() };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  const handleAddLeave = (leaveRequest) => {
    console.log("Leave Request Submitted: ", leaveRequest);
  };

  const handleGenerateReceipt = (payrollData) => {
    console.log("Payroll Receipt Generated: ", payrollData);
    // You can implement logic here to handle the generated payroll receipt
    setIsGeneratingPayroll(false); // Close the Payroll component after generating the receipt
  };

  const renderContent = () => {
    if (isAddingEmployee) {
      return (
        <EmployeeForm
          newEmployee={newEmployee}
          handleInputChange={handleInputChange}
          handleAddEmployee={handleAddEmployee}
          setIsAddingEmployee={setIsAddingEmployee}
        />
      );
    }

    if (isAddingLeave) {
      return (
        <LeaveForm
          setIsAddingLeave={setIsAddingLeave}
          handleAddLeave={handleAddLeave}
        />
      );
    }

    if (isGeneratingPayroll) {
      return (
        <Payroll handleGenerateReceipt={handleGenerateReceipt} /> // Render Payroll component
      );
    }

    switch (activeView) {
      case 'Manage Employee':
        return (
          <>
            <EmployeeDashboard employees={employees} setIsAddingEmployee={setIsAddingEmployee} />
            <EmployeeTable employees={employees} />
          </>
        );
      case 'Attendance':
        return (
          <Attendance
            employees={employees}
            handleCheckIn={handleCheckIn}
            handleCheckOut={handleCheckOut}
          />
        );
      case 'Leave':
        return (
          <LeaveForm
            setIsAddingLeave={setIsAddingLeave}
            handleAddLeave={handleAddLeave}
          />
        );
      case 'Calendar': // Render the Calendar when the Calendar item is active
        return <Calendar />;
      case 'Payroll': // Render the Payroll when the Payroll item is active
        return <Payroll handleGenerateReceipt={handleGenerateReceipt} />;
      case 'Salary Adjustment': // Render the Salary Adjustment when the item is active
        return <SalaryAdjustment />;
      case 'Annual Salary Statement': // Render the Annual Salary Statement when the item is active
        return <AnnualSalaryStatement />;
      default:
        return <h2 className="text-2xl font-semibold">{activeView}</h2>;
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar
        activeItem={activeItem}
        setActiveItem={(item) => {
          setActiveItem(item);
          setActiveView(item === 'Employee' ? 'Manage Employee' : item);
          setIsAddingEmployee(false);
          setIsAddingLeave(item === 'Leave' ? false : item === 'Leave Form' ? true : false);
          setIsGeneratingPayroll(item === 'Payroll'); // Activate payroll component
        }}
      />
      <div className="flex-1 ml-64 p-8">
        <Header isAddingEmployee={isAddingEmployee} activeView={activeView} />
        {renderContent()}
      </div>
    </div>
  );
};

export default EmployeeManagement;
