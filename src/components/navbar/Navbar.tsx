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
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  padding: '0 30px',
  '@media (max-width: 600px)': {
    padding: '0 10px',
  }
});

const StyledMenuButton = styled(IconButton)({
    display: 'none',
    marginRight: '20px',
    '@media (max-width: 600px)': {
      display: 'block',
      marginRight: '10px',
    },
});

const StyledMenu = styled(Box)({
    display: 'flex',
    '@media (max-width: 600px)': {
      display: 'none',
    },
  });

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const StyledImage = styled('img')({
  width: '250px'
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
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
        >
          <MenuIcon />
        </StyledMenuButton>
        <StyledImage src={signature} />
        <StyledMenu>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
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