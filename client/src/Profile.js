// Profile.js

import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
    // main.js

function getSession(key) {
    const sessionData = localStorage.getItem(key);
    if (sessionData) {
        const parsedData = JSON.parse(sessionData);
        if (parsedData.expirationTime > new Date().getTime()) {
            return parsedData.value;
        } else {
            // Session expired, remove it
            localStorage.removeItem(key);
        }
    }
    return null;
}
    const userEmail = getSession("emailid");
    const location = useLocation();
    
    return (
        <div>
            <h3>Name: {location.state.firstname}</h3>
            <h3>Email: {userEmail} </h3>
            
            

        </div>
    );
}

export default Profile;
