import { ArrowLeft } from 'lucide-react';

const EmployeeForm = ({ newEmployee, handleInputChange, handleAddEmployee, setIsAddingEmployee }) => (
  <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
    <div className="flex items-center mb-8">
      <button
        onClick={() => setIsAddingEmployee(false)}
        className="mr-4 p-2 rounded-full hover:bg-gray-100"
      >
        <ArrowLeft size={24} />
      </button>
      <h3 className="text-xl font-semibold">Add New Employee</h3>
    </div>
    <form onSubmit={handleAddEmployee} className="space-y-6">
      {['name', 'position', 'department', 'email', 'phone'].map((field) => (
        <div key={field} className="space-y-2">
          <label htmlFor={field} className="block text-sm font-medium text-gray-700">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            id={field}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            value={newEmployee[field]}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Save Employee
      </button>
    </form>
  </div>
);

export default EmployeeForm;
