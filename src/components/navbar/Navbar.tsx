import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box
} from '@mui/material';
import { Link, scroller } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import signature from "../../assets/signature.png"

import { useDarkMode } from '../../util/DarkModeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';
import ServicesIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendar from '@mui/icons-material/PermContactCalendar';

const navbarSelections = [
  { name: "Accueil", target: "AccueilScrollSection", icon: <HomeIcon /> },
  { name: "Services", target: "ServicesScrollSection", icon: <ServicesIcon /> },
  { name: "Contacter", target: "ContacterScrollSection", icon: <PermContactCalendar /> }
];

const StyledAppBar = styled(AppBar)({
  position: 'fixed',
  zIndex: '999 !important',
  background: 'aliceblue',
  padding: '0 30px',
  '@media (max-width: 600px)': {
    padding: '0 10px',
  }
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& span': {
    marginLeft: '8px',
  },
  '& svg': {
    marginRight: '8px',
  },
  transition: 'color 300ms',
}));

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

  const { isDarkMode, toggleDarkMode } = useDarkMode();

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
          {navbarSelections.map((value, index) => (
            <Link
              to={value.target}
              spy={false}
              smooth={true}
              duration={1000}
              name={value.name}
            >
              <Button color="inherit">
                {value.name}
              </Button>
            </Link>
          ))}
        <IconButton color="inherit" onClick={toggleDarkMode}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
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
          {navbarSelections.map((value, index) => (
            <Link
              to={value.target}
              spy={true}
              smooth={true}
              duration={1000}
            >
              <StyledMenuItem>
                <>
                {value.icon}
                <span>{value.name}</span>
                </>
              </StyledMenuItem>
            </Link>
          ))}
          <MenuItem onClick={toggleDarkMode}>
            {isDarkMode ? (
              <>
                <Brightness7Icon />
                <span style={{ marginLeft: '8px' }}></span>
              </>
            ) : (
              <>
                <Brightness4Icon />
                <span style={{ marginLeft: '8px' }}></span>
              </>
            )}
          </MenuItem>
        </Menu>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;