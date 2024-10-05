import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('employee'); // Default to employee
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();


    if (userType === 'admin') {
      history.push('/admin'); // Redirect to admin panel
    } else {
      history.push('/employee'); // Redirect to employee panel
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">User ID</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div className="flex justify-between mt-4">
            <div>
              <label>
                <input
                  type="radio"
                  value="employee"
                  checked={userType === 'employee'}
                  onChange={(e) => setUserType(e.target.value)}
                  className="mr-2"
                />
                Employee Login
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="admin"
                  checked={userType === 'admin'}
                  onChange={(e) => setUserType(e.target.value)}
                  className="mr-2"
                />
                Admin Login
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
