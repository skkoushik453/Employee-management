import { motion } from 'framer-motion';

const EmployeeCard = ({ icon, title, count }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg flex items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
      title === 'Total Employee' ? 'bg-blue-100 text-blue-500' : 
      title === 'Active Employee' ? 'bg-green-100 text-green-500' : 
      title === 'On Leave' ? 'bg-yellow-100 text-yellow-500' : 
      'bg-purple-100 text-purple-500'
    }`}>
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  </motion.div>
);

export default EmployeeCard;