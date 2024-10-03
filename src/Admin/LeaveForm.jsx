import React, { useState } from 'react';

const LeaveForm = ({ setIsAddingLeave, handleAddLeave }) => {
  const [leaveRequest, setLeaveRequest] = useState({
    name: '',
    description: '',
    reason: '',
    duration: '',
    fromDate: '',
    toDate: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeaveRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fromDate, toDate } = leaveRequest;

    // Validation: Check if the 'to' date is after the 'from' date
    if (new Date(fromDate) >= new Date(toDate)) {
      setError("The 'To Date' must be after the 'From Date'.");
      return;
    }

    // Clear error and submit the leave request
    setError('');
    handleAddLeave(leaveRequest);
    setLeaveRequest({
      name: '',
      description: '',
      reason: '',
      duration: '',
      fromDate: '',
      toDate: '',
    });
    setIsAddingLeave(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold">Leave Request Form</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        name="name"
        value={leaveRequest.name}
        onChange={handleInputChange}
        placeholder="Employee Name"
        required
        className="border p-2 rounded w-full"
      />
      <textarea
        name="description"
        value={leaveRequest.description}
        onChange={handleInputChange}
        placeholder="Leave Description"
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="reason"
        value={leaveRequest.reason}
        onChange={handleInputChange}
        placeholder="Reason for Leave"
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="duration"
        value={leaveRequest.duration}
        onChange={handleInputChange}
        placeholder="Duration (e.g., 2 days)"
        required
        className="border p-2 rounded w-full"
      />
      <label className="block">
        From Date:
        <input
          type="date"
          name="fromDate"
          value={leaveRequest.fromDate}
          onChange={handleInputChange}
          required
          className="border p-2 rounded w-full"
        />
      </label>
      <label className="block">
        To Date:
        <input
          type="date"
          name="toDate"
          value={leaveRequest.toDate}
          onChange={handleInputChange}
          required
          className="border p-2 rounded w-full"
        />
      </label>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Submit Leave Request
      </button>
    </form>
  );
};

export default LeaveForm;
