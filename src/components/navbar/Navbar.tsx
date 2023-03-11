import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import signature from "../../assets/signature.png"

const StyledAppBar = styled(AppBar)({
  position: 'fixed',
  zIndex: '999 !important',
  background: 'aliceblue',
  padding: '0 30px',
  '@media (max-width: 600px)': {
    padding: '0 10px',
  }
});

const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  marginRight: '20px',
  '@media (max-width: 600px)': {
    display: 'block',
    marginRight: '10px',
  }
}));

const StyledMenu = styled(Box)({
  display: 'flex',
  color: '#100C08',
  '@media (max-width: 600px)': {
    display: 'none',
  },
  '& Button': {
    display: 'inline-block',
    borderRadius: '0',
    padding: '0 30px',
    fontSize: '18px',
    color: 'onyx'
  },
  '& Button:after': {
    marginTop: '5px',
    marginBottom: '0',
    display: 'block',
    content: `''`,
    borderBottom: 'solid 3px orange',
    transform: 'scaleX(0)', 
    transition: 'transform 100ms ease-in-out',  
  },
  '& Button:hover:after': {
    transform: 'scaleX(1)',
  },
  '& Button:hover': {
    backgroundColor: 'unset',
  },
  margin: 0,
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledImage = styled('img')({
  width: '225px',
  height: '38px'
});

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledMenuButton
          edge="start"
          aria-label="menu"
          onClick={handleMenu}
        >
          <MenuIcon />
        </StyledMenuButton>
        <StyledImage src={signature} />
        <StyledMenu>
          <Button color="inherit">Accueil</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contacter</Button>
        </StyledMenu>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;