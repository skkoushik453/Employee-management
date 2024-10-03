import React from 'react';
import { motion } from 'framer-motion';
import { Bell, User, LogOut } from 'lucide-react';

const Header = ({ isAddingEmployee, activeView }) => (
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-3xl font-bold text-gray-800">
      {isAddingEmployee ? 'Add New Employee' : activeView}
    </h2>
    <div className="flex items-center space-x-4">
      <motion.div whileHover={{ scale: 1.1 }} className="relative">
        <Bell size={24} className="text-gray-600 cursor-pointer" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="relative">
        <User size={24} className="text-gray-600 cursor-pointer" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <LogOut size={24} className="text-gray-600 cursor-pointer" />
      </motion.div>
    </div>
  </div>
);

export default Header;
