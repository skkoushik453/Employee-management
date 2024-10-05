import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Clock, DollarSign, Target, ChevronDown, MessageCircle } from 'lucide-react';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [openItems, setOpenItems] = useState([]);

  const menuItems = [
    { icon: <Users size={20} />, text: 'Employee', subItems: ['Manage Employee'] },
    { icon: <Clock size={20} />, text: 'Attendance' },
    {
      icon: <MessageCircle size={20} />,
      text: 'Leave',
      subItems: ['Leave Form', 'Calendar'],
    },
    {
      icon: <DollarSign size={20} />,
      text: 'Payroll',
      subItems: ['Salary Adjustment', 'Annual Salary Statement'],
    },
    { icon: <Target size={20} />, text: 'Goals' },
  ];

  const handleItemClick = (mainItem) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(mainItem)
        ? prevOpenItems.filter((item) => item !== mainItem)
        : [...prevOpenItems, mainItem]
    );
    setActiveItem(mainItem);
  };

  const handleSubItemClick = (mainItem, subItem) => {
    setActiveItem(subItem);
  };

  const isMainItemActive = (itemText) => activeItem === itemText;
  const isSubItemActive = (subItemText) => activeItem === subItemText;

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="w-64 bg-gray-900 text-white h-screen p-4 fixed left-0 top-0 overflow-y-auto"
    >
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-red-500 rounded-full mr-2"></div>
        <h1 className="text-2xl font-bold">G-Tec</h1>
      </div>
      {menuItems.map((item, index) => (
        <div key={index} className="mb-2">
          <motion.div
            className={`flex items-center p-2 rounded-lg cursor-pointer ${
              isMainItemActive(item.text) ? 'bg-red-500 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
            onClick={() => handleItemClick(item.text)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
            <span className="ml-2">{item.text}</span>
            {item.subItems && (
              <ChevronDown
                size={16}
                className={`ml-auto transform transition-transform ${
                  openItems.includes(item.text) ? 'rotate-180' : ''
                }`}
              />
            )}
          </motion.div>
          <AnimatePresence>
            {item.subItems && openItems.includes(item.text) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="ml-6 mt-1 space-y-1"
              >
                {item.subItems.map((subItem, subIndex) => (
                  <motion.div
                    key={subIndex}
                    className={`p-2 rounded-lg cursor-pointer text-gray-400 hover:bg-gray-800`}
                    onClick={() => handleSubItemClick(item.text, subItem)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={isSubItemActive(subItem) ? 'text-red-500' : ''}>
                      {subItem}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

export default Sidebar;