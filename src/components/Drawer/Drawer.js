import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';

const topMenu = [
  {
    label: 'Example 1',
    url: 'Example1',
  }, {
    label: 'Example 2',
    url: 'Example2',
  }, {
    label: 'Send email',
  }, {
    label: 'Drafts',
  },
];
const bottomMenu = ['All mail', 'Trash', 'Spam'];

const Drawer = ({
  anchor,
  drawerWidth,
  toolbarBottomContent,
}) => (
  <MuiDrawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor={anchor}
  >
    <Toolbar style={{ height: 128, flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flex: 1,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flex: 1,
        }}
      >
        { toolbarBottomContent }
      </Box>
    </Toolbar>
    <Divider />
    <List>
      {topMenu.map(({ label, url }, index) => (
        <Link
          relative
          to={url}
        >
          <ListItem key={label} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
    <Divider />
    <List>
      {bottomMenu.map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </MuiDrawer>
);

Drawer.propTypes = {
  anchor: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),
  drawerWidth: PropTypes.number,
  toolbarBottomContent: PropTypes.element,
};

Drawer.defaultProps = {
  anchor: 'left',
  drawerWidth: 240,
  toolbarBottomContent: null,
};

export default Drawer;
