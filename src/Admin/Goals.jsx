import React, { useState } from 'react';

const Goals = ({ employees, handleSetGoals, goals }) => {
  const [goalDetails, setGoalDetails] = useState({
    employee: '',
    goal: '',
    targetDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGoalDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetGoals(goalDetails);
    setGoalDetails({ employee: '', goal: '', targetDate: '' });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Set Goals</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Employee:</label>
          <select
            name="employee"
            value={goalDetails.employee}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Goal:</label>
          <input
            type="text"
            name="goal"
            value={goalDetails.goal}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Target Date:</label>
          <input
            type="date"
            name="targetDate"
            value={goalDetails.targetDate}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-700"
        >
          Set Goal
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Employee Goals</h3>
        {goals.length === 0 ? (
          <p>No goals set yet.</p>
        ) : (
          <ul>
            {goals.map((goal) => (
              <li key={goal.id} className="mb-2 p-2 border rounded">
                <strong>{goal.employee}</strong>: {goal.goal}
                <br />
                Target Date: {goal.targetDate}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Goals;