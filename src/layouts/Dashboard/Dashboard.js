import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import * as dashboardActions from '../../actions/Dashboard';

const Dashboard = () => {
  const dashboard = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const value = dashboard.dashboardVariable === 'Clicked' ? 'Not Clicked' : 'Clicked';
    dispatch(dashboardActions.dashboardChange(value));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <p>Dashboard Layout</p>
      <button type="button" onClick={handleButtonClick}>Click here!</button>
      <p>{dashboard.dashboardVariable}</p>
    </>
  );
};

export default Dashboard;
