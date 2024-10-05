import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const AnnualSalaryStatement = () => {
  const [salaryData, setSalaryData] = useState([
    { 
      year: 2023, 
      employeeId: 'EMP001',
      name: 'John Doe',
      basicSalary: 500000,
      hra: 50000,
      da: 25000,
      specialAllowance: 25000,
      totalEarnings: 600000,
      pf: 60000,
      tax: 50000,
      totalDeductions: 110000,
      netSalary: 490000
    },
    { 
      year: 2023, 
      employeeId: 'EMP002',
      name: 'Jane Smith',
      basicSalary: 550000,
      hra: 55000,
      da: 27500,
      specialAllowance: 27500,
      totalEarnings: 660000,
      pf: 66000,
      tax: 55000,
      totalDeductions: 121000,
      netSalary: 539000
    },
    { 
      year: 2023, 
      employeeId: 'EMP003',
      name: 'Bob Johnson',
      basicSalary: 480000,
      hra: 48000,
      da: 24000,
      specialAllowance: 24000,
      totalEarnings: 576000,
      pf: 57600,
      tax: 48000,
      totalDeductions: 105600,
      netSalary: 470400
    },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    year: new Date().getFullYear(),
    employeeId: '',
    name: '',
    basicSalary: 0,
    hra: 0,
    da: 0,
    specialAllowance: 0,
  });

  const calculateTotals = (employee) => {
    const totalEarnings = employee.basicSalary + employee.hra + employee.da + employee.specialAllowance;
    const pf = Math.round(0.12 * employee.basicSalary);
    const tax = Math.round(0.1 * totalEarnings);
    const totalDeductions = pf + tax;
    const netSalary = totalEarnings - totalDeductions;

    return {
      ...employee,
      totalEarnings,
      pf,
      tax,
      totalDeductions,
      netSalary
    };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({
      ...prev,
      [name]: name === 'year' || name === 'employeeId' ? value : Number(value)
    }));
  };

  const handleAddEmployee = () => {
    const employeeWithTotals = calculateTotals(newEmployee);
    setSalaryData(prev => [...prev, employeeWithTotals]);
    setNewEmployee({
      year: new Date().getFullYear(),
      employeeId: '',
      name: '',
      basicSalary: 0,
      hra: 0,
      da: 0,
      specialAllowance: 0,
    });
  };

  const downloadAllPDF = () => {
    const doc = new jsPDF();
    doc.text("Annual Salary Statement - All Employees", 14, 15);
    
    const columns = [
      "Year", "Employee ID", "Name", "Basic Salary", "HRA", "DA", 
      "Special Allowance", "Total Earnings", "PF", "Tax", 
      "Total Deductions", "Net Salary"
    ];

    const rows = salaryData.map(data => [
      data.year,
      data.employeeId,
      data.name,
      data.basicSalary,
      data.hra,
      data.da,
      data.specialAllowance,
      data.totalEarnings,
      data.pf,
      data.tax,
      data.totalDeductions,
      data.netSalary
    ]);

    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 20,
    });

    doc.save("all_employees_salary_statement.pdf");
  };

  const downloadIndividualPDF = (employee) => {
    const doc = new jsPDF();
    
    doc.setFontSize(16);
    doc.text(`Annual Salary Statement for ${employee.name}`, 14, 15);
    
    doc.setFontSize(12);
    let yPos = 30;
    const lineHeight = 10;

    const addLine = (text) => {
      doc.text(text, 14, yPos);
      yPos += lineHeight;
    };

    addLine(`Employee ID: ${employee.employeeId}`);
    addLine(`Year: ${employee.year}`);
    addLine(``);
    addLine(`Basic Salary: ${employee.basicSalary}`);
    addLine(`HRA: ${employee.hra}`);
    addLine(`DA: ${employee.da}`);
    addLine(`Special Allowance: ${employee.specialAllowance}`);
    addLine(`Total Earnings: ${employee.totalEarnings}`);
    addLine(``);
    addLine(`PF: ${employee.pf}`);
    addLine(`Tax: ${employee.tax}`);
    addLine(`Total Deductions: ${employee.totalDeductions}`);
    addLine(``);
    addLine(`Net Salary: ${employee.netSalary}`);

    doc.save(`${employee.name}_salary_statement.pdf`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Annual Salary Statement</h2>
        <button 
          onClick={downloadAllPDF} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download All (PDF)
        </button>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Add New Employee</h3>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="number"
            name="year"
            value={newEmployee.year}
            onChange={handleInputChange}
            placeholder="Year"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="employeeId"
            value={newEmployee.employeeId}
            onChange={handleInputChange}
            placeholder="Employee ID"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="name"
            value={newEmployee.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="basicSalary"
            value={newEmployee.basicSalary}
            onChange={handleInputChange}
            placeholder="Basic Salary"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="hra"
            value={newEmployee.hra}
            onChange={handleInputChange}
            placeholder="HRA"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="da"
            value={newEmployee.da}
            onChange={handleInputChange}
            placeholder="DA"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="specialAllowance"
            value={newEmployee.specialAllowance}
            onChange={handleInputChange}
            placeholder="Special Allowance"
            className="border p-2 rounded"
          />
        </div>
        <button 
          onClick={handleAddEmployee}
          className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Employee
        </button>
      </div>

      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">Year</th>
            <th className="border border-gray-200 p-2">Employee ID</th>
            <th className="border border-gray-200 p-2">Name</th>
            <th className="border border-gray-200 p-2">Basic Salary</th>
            <th className="border border-gray-200 p-2">HRA</th>
            <th className="border border-gray-200 p-2">DA</th>
            <th className="border border-gray-200 p-2">Special Allowance</th>
            <th className="border border-gray-200 p-2">Total Earnings</th>
            <th className="border border-gray-200 p-2">PF</th>
            <th className="border border-gray-200 p-2">Tax</th>
            <th className="border border-gray-200 p-2">Total Deductions</th>
            <th className="border border-gray-200 p-2">Net Salary</th>
            <th className="border border-gray-200 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {salaryData.map((data) => (
            <tr key={data.employeeId}>
              <td className="border border-gray-200 p-2">{data.year}</td>
              <td className="border border-gray-200 p-2">{data.employeeId}</td>
              <td className="border border-gray-200 p-2">{data.name}</td>
              <td className="border border-gray-200 p-2">{data.basicSalary}</td>
              <td className="border border-gray-200 p-2">{data.hra}</td>
              <td className="border border-gray-200 p-2">{data.da}</td>
              <td className="border border-gray-200 p-2">{data.specialAllowance}</td>
              <td className="border border-gray-200 p-2">{data.totalEarnings}</td>
              <td className="border border-gray-200 p-2">{data.pf}</td>
              <td className="border border-gray-200 p-2">{data.tax}</td>
              <td className="border border-gray-200 p-2">{data.totalDeductions}</td>
              <td className="border border-gray-200 p-2">{data.netSalary}</td>
              <td className="border border-gray-200 p-2">
                <button 
                  onClick={() => downloadIndividualPDF(data)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm"
                >
                  Download PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnnualSalaryStatement;