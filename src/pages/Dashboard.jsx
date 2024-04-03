import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [testResults, setTestResults] = useState([]);

  // Simulate fetching user details from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Simulate fetching test results from local storage
  useEffect(() => {
    const storedResults = localStorage.getItem('testResults');
    if (storedResults) {
      setTestResults(JSON.parse(storedResults));
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-semibold text-center mb-8 text-cyan-400">Dashboard</h1>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display other user details */}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Previous Test Results</h2>
        {testResults.map((result, index) => (
          <div key={index}>
            <p>Test Date: {result.date}</p>
            {/* Display test results for children and parents */}
          </div>
        ))}
        {testResults.length === 0 && (
          <p>No previous test results found.</p>
        )}
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-8">
        Take Test
      </button>
    </div>
  );
}

export default Dashboard;
