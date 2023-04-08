import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

import { MyDrawer } from '../../components';
import * as dashboardActions from '../../actions/Dashboard';

const drawerWidth = 260;

const Dashboard = () => {
  const theme = useTheme();
  const dashboard = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const value = dashboard.dashboardVariable === 'Clicked' ? 'Not Clicked' : 'Clicked';
    dispatch(dashboardActions.dashboardChange(value));
  };

  return (
    <>
      <AppBar
        color="primary"
        enableColorOnDark
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar variant="dense">
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <MyDrawer
        drawerWidth={drawerWidth}
        toolbarBottomContent={(
          <>
            <Box sx={{ flex: 1 }} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: theme.palette.secondary.dark,
                  width: 56,
                  height: 56,
                }}
              >
                H
              </Avatar>
            </Box>
          </>
        )}
      />
      <Box
        component="main"
        sx={{
          width: `calc(100% - ${drawerWidth}px - 24px * 2)`,
          ml: `${drawerWidth}px`,
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Toolbar variant="dense" />
        <Outlet />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <p>Dashboard Layout</p>
        <button type="button" onClick={handleButtonClick}>Click here!</button>
        <p>{dashboard.dashboardVariable}</p>
      </Box>
    </>
  );
};

export default Dashboard;
