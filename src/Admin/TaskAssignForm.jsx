import React, { useState } from 'react';

const TaskAssignForm = ({ employees, handleTaskAssignment, tasks }) => {
  const [taskDetails, setTaskDetails] = useState({
    employee: '',
    title: '',
    description: '',
    dueDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTaskAssignment(taskDetails);
    setTaskDetails({ employee: '', title: '', description: '', dueDate: '' });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Assign Task</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Employee:</label>
          <select
            name="employee"
            value={taskDetails.employee}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.name}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task Title:</label>
          <input
            type="text"
            name="title"
            value={taskDetails.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
          <textarea
            name="description"
            value={taskDetails.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={taskDetails.dueDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Assign Task
        </button>
      </form>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Assigned Tasks</h3>
        {tasks.length === 0 ? (
          <p className="text-gray-600">No tasks assigned yet.</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li key={task.id} className="bg-gray-50 p-4 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-1">{task.title}</h4>
                <p className="text-gray-600 mb-2">Assigned to: {task.employee}</p>
                <p className="text-gray-600">Due: {task.dueDate}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskAssignForm;