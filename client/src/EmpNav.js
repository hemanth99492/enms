import React from 'react';
import { AppBar, Tabs, Tab, Button, Toolbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const tabStyle = {
  fontFamily: 'Times Of New Roman',
  color: 'white',
  fontWeight: 'light',
  fontSize: '1.25rem',
  textTransform: 'none',
};

function EmpNav() {
  const navigate = useNavigate();

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
  const handleProfile = async () => {
    try {
      const response = await axios.get('https://enms-xi.vercel.app/profiledata', {
        params: {
          emailid: userEmail,
        },
      });

      if (response.data) {
        navigate('/profile', {
          state: {
            firstname: response.data.firstname,      // Adjust property name if needed
          },
        });
        console.log(response.data)
      }
      else
        {
          alert('no user found')
        }
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };


  return (
    <div>
      <React.Fragment>
        <AppBar sx={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
          <Toolbar>
            <React.Fragment>
              <Tabs>
                <Tab style={{ ...tabStyle }} label='Home' component={Link} to='' />
                {/*<Tab style={{ ...tabStyle }} label='Apply Leave' />*/}
                <Tab style={{ ...tabStyle }} label='Apply Leave' component={Link} to='/apply' />
                <Tab style={{ ...tabStyle }} label='Profile' component={Link} onClick={handleProfile} to='/profile' />
                <Tab style={{ ...tabStyle }} label='Change Password' component={Link} to='/changepwd' />
              </Tabs>
              <Button variant='contained' component={Link} to='/elogin' sx={{ backgroundColor: 'maroon', marginLeft: 'auto' }}>
                <LogoutIcon />
                Logout
              </Button>
            </React.Fragment>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
}

export default EmpNav;
