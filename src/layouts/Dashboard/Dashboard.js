import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as dashboardActions from '../../actions/Dashboard';

const Dashboard = () => {
  const dashboard = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  
  const handleButtonClick = () => {
    const value = dashboard.dashboardVariable === 'Clicked' ? 'Not Clicked' : 'Clicked';
    dispatch(dashboardActions.dashboardChange(value));
  }

  return (
    <>
      <p>Dashboard Layout</p>
      <button onClick={handleButtonClick}>Click here!</button>
      <p>{dashboard.dashboardVariable}</p>
    </>
  );
}

export default Dashboard;
