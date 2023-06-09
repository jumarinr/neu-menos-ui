import { useNavigate } from 'react-router-dom';

import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import menuItems from './menuItems';

const DRAWER_WIDTH = 300;
const BOX_SHADOW = 3;

const Menu = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            backgroundColor: 'background.default',
            boxShadow: BOX_SHADOW,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className="text-center d-flex align-items-center">
          <img src="images/pulmones.png" alt="pulmones logo" width="50%" />
          <Typography variant="h6" gutterBottom>
            <b>NeuMenos</b>
          </Typography>
        </div>
        <List>
          <Divider sx={{ boxShadow: BOX_SHADOW }} />
          {menuItems.map(({ name, icon: Icon, page }) => (
            <React.Fragment key={name}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate(page)}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ boxShadow: BOX_SHADOW }} />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', paddingTop: 5 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          justifySelf="center"
        >
          <Grid item xs={12} md={8}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
