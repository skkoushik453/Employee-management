import React, { useState } from 'react';

const LeaveForm = ({ handleAddLeave, setIsAddingLeave }) => {
  const [leaveRequest, setLeaveRequest] = useState({
    name: '',
    email: '',
    reason: '',
    fromDate: '',
    toDate: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeaveRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fromDate, toDate } = leaveRequest;

    // Validation: Check if 'to' date is after 'from' date
    if (new Date(fromDate) >= new Date(toDate)) {
      setError("The 'To Date' must be after the 'From Date'.");
      return;
    }

    // Clear error and show success popup
    setError('');
    setSuccessMessage('Leave request submitted successfully!');
    handleAddLeave(leaveRequest);

    // Reset the form
    setLeaveRequest({
      name: '',
      email: '',
      reason: '',
      fromDate: '',
      toDate: '',
    });

    // Clear success message after a few seconds
    setTimeout(() => setSuccessMessage(''), 3000);

    // Close form (optional, depends on your use case)
    setIsAddingLeave(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold">Leave Request Form</h2>
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <input
        type="text"
        name="name"
        value={leaveRequest.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="email"
        name="email"
        value={leaveRequest.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
        className="border p-2 rounded w-full"
      />
      <textarea
        name="reason"
        value={leaveRequest.reason}
        onChange={handleInputChange}
        placeholder="Reason"
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
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Submit Leave Request
      </button>
    </form>
  );
};

export default LeaveForm;
