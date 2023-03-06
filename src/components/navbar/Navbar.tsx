import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import signature from "../../assets/signature.png";

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#333',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: 250,
  },
});

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <List>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledIconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
          <MenuIcon />
        </StyledIconButton>
        <img src={signature} />
        <Button color="inherit">Contact</Button>
      </StyledToolbar>
      <StyledDrawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {menuItems}
      </StyledDrawer>
    </StyledAppBar>
  );
};

export default NavBar