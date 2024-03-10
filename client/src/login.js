import React, { useState } from 'react';
import logo from './logo1.jpeg';
import { AppBar, Tabs, Tab, Button, Toolbar, Menu, MenuItem } from '@mui/material';
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

function Login() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <React.Fragment>
        <AppBar sx={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
          <Toolbar>
            <React.Fragment>
              <Tabs>
                <Tab style={{ ...tabStyle }} label='Home' />
                <Tab style={{ ...tabStyle }} label='About' />
                <Tab style={{ ...tabStyle }} label='Help' />
                <Tab style={{ ...tabStyle }} label='Contactus' />
                <Tab
                  style={{ ...tabStyle }}
                  label='Login'
                  onClick={handleMenuClick}
                />
              </Tabs>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} to='/mlogin'>
                  Manager Login
                </MenuItem>
                <MenuItem component={Link} to='/elogin'>
                  Employee Login
                </MenuItem>
                {/* Add other menu items if needed */}
              </Menu>
            </React.Fragment>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
}

export default Login;
