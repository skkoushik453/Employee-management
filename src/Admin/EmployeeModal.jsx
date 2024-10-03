import { motion } from 'framer-motion';
import EmployeeEditForm from './EmployeeEditForm';

const EmployeeModal = ({ employee, closeModal, handleInputChange, saveChanges, isEditing, setIsEditing }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        className="bg-white rounded-lg p-6 w-1/3 shadow-lg space-y-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isEditing ? `Edit ${employee.name}'s Information` : `${employee.name}'s Information`}
        </h2>

        <img src={employee.image} alt={employee.name} className="w-16 h-16 rounded-full mx-auto mb-4" />

        {/* Use the EmployeeEditForm here */}
        <EmployeeEditForm employee={employee} handleInputChange={handleInputChange} />

        {/* Button for editing and saving */}
        <div className="mt-6 flex justify-end space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={saveChanges}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>
          )}

          <button
            onClick={closeModal}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EmployeeModal;
