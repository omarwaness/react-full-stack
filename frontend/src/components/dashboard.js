import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('/api/auth/login') 
      .then(response => response.json())
      .then(data => setUserName(data.name)) // Assuming API returns { name: "John Doe" }
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  return (
    <div>
      <h1>Welcome, {userName ? userName : 'Guest'}!</h1>
    </div>
  );
}

export default Dashboard;
