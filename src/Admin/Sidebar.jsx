import { motion, AnimatePresence } from 'framer-motion';
import { Users, Clock, DollarSign, Target, ChevronDown, MessageCircleIcon } from 'lucide-react';

const Sidebar = ({ activeItem, setActiveItem, setActiveSubItem }) => {
  const menuItems = [
    { icon: <Users size={20} />, text: 'Employee', subItems: ['Manage Employee'] },
    { icon: <Clock size={20} />, text: 'Attendance' },
    { icon: <MessageCircleIcon size={20} />, text: 'leave ' },
    { icon: <DollarSign size={20} />, text: 'Payroll' },
    { icon: <Target size={20} />, text: 'Goals' },
  ];

  const handleSubItemClick = (mainItem, subItem) => {
    setActiveItem(mainItem);
    setActiveSubItem(subItem);
  };

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
            className={`flex items-center p-2 rounded-lg cursor-pointer ${activeItem === item.text ? 'bg-red-500 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
            onClick={() => setActiveItem(item.text)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
            <span className="ml-2">{item.text}</span>
            {item.subItems && <ChevronDown size={16} className="ml-auto" />}
          </motion.div>
          <AnimatePresence>
            {item.subItems && activeItem === item.text && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="ml-6 mt-1 space-y-1"
              >
                {item.subItems.map((subItem, subIndex) => (
                  <motion.div
                    key={subIndex}
                    className={`p-2 rounded-lg cursor-pointer ${subItem === 'Manage Employee' ? 'text-red-400' : 'text-gray-400 hover:bg-gray-800'}`}
                    onClick={() => handleSubItemClick(item.text, subItem)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {subItem}
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
