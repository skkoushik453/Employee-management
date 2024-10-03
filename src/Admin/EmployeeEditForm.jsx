const EmployeeEditForm = ({ employee, handleInputChange }) => {
    return (
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 bg-white"
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700">Position</label>
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 bg-white"
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 bg-white"
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 bg-white"
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 bg-white"
          />
        </div>
      </form>
    );
  };
  
  export default EmployeeEditForm;
  