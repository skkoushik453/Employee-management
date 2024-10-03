import { motion } from 'framer-motion';
import { Search, Plus, Users } from 'lucide-react';
import EmployeeCard from './Employeecard';

const EmployeeDashboard = ({ employees, setIsAddingEmployee }) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <EmployeeCard icon={<Users size={24} />} title="Total Employee" count= {employees.length} />
      <EmployeeCard icon={<Users size={24} />} title="Active Employee" count="15" />
      <EmployeeCard icon={<Users size={24} />} title="On Leave" count="2" />
      <EmployeeCard icon={<Users size={24} />} title="Onboarding" count="25" />
    </div>
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Employee List</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAddingEmployee(true)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus size={18} className="mr-2" />
          Add Employee
        </motion.button>
      </div>
      <div className="flex items-center mb-4">
        <Search className="text-gray-400 mr-2" size={20} />
        <input
          type="text"
          placeholder="Search employee"
          className="bg-gray-100 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
    </div>
  </>
);

export default EmployeeDashboard;
