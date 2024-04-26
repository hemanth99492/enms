import React from 'react';
import Login from './login';
import myImage from './lms.png'; // Import your image
import { margin } from '@mui/system';

function IndexHome() {
  return (
    <div>
      <div className='navbar' style={{'marginBottom':'30px'}} >
        <Login />
      </div>
      <div className='remaining' style={{'marginTop':'10px'}}>
        <img style={{'height':'100%', 'width': '100%'}}src={myImage} alt="Leave Management System" />
      </div>
    </div>
  );
}

export default IndexHome;
