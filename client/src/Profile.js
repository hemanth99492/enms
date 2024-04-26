import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Function to fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const userId = 'admin@gmail.com'; // Replace 'user_id_here' with the actual user ID
        const response = await fetch(`http://localhost:5000/api/user/${userId}`);
        const userData = await response.json();
        setUser(userData);
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, []);

  // Render user data
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {user ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Name: hemanth</h2>
           <h2>Email: hemanthreddykondamadugula@gmail.com</h2>
          <h2>Leave Balance: 16</h2>
          {/* Add other user data here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
