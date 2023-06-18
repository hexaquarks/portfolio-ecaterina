import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useDarkMode } from '../../util/DarkModeContext';
import { DARK_MODE_COLOR } from '../../util/Constants';
import map from "../../assets/map.png";

const StyledContainer = styled(Container)(({ theme }) => {
  const darkMode = useDarkMode();
  const backgroundColor = darkMode.isDarkMode ? DARK_MODE_COLOR : 'aliceblue';

  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(5),
    marginLeft: '0',
    marginRight: '0',
    width: '100%',
    maxWidth: 'unset',
    "&.MuiContainer-root.MuiContainer-maxWidthLg": {
      maxWidth: "unset"
    },
    backgroundColor: `${backgroundColor}`,
    transition: 'background-color 0.5s',
  };
});

const PictureContainer = styled(Box)(({ theme }) => ({
  width: '450px',
  height: '350px',
  marginTop: theme.spacing(1),
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  paddingLeft: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const Picture = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  height: "100%",
  width: "100%",
  objectFit: "cover",
  [theme.breakpoints.down('sm')]: {
    position: 'static',
    height: 'auto',
    maxWidth: '100%',
  },
}));


const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  margin: 0,
  padding: 0,
}));

const CustomTypographyTitle = styled(Typography)(({ theme }) => {
  const darkMode = useDarkMode();
  const textColor = darkMode.isDarkMode ? 'aliceblue' : DARK_MODE_COLOR;

  return {
    color: `${textColor}`,
    fontSize: `clamp(40px, 4vw, 60px)`,
    fontWeight: '400',
    fontFamily: 'Montserrat, sans-serif',
    marginTop: theme.spacing(3)
  };
});

const CustomTypographySubtitle = styled(Typography)(({ theme }) => {
  const darkMode = useDarkMode();
  const textColor = darkMode.isDarkMode ? 'aliceblue' : DARK_MODE_COLOR;

  return {
    color: `${textColor}`,
    fontSize: `clamp(20px, 3vw, 30px)`,
    fontWeight: '400',
    fontFamily: 'Montserrat, sans-serif',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  };
});

const Territory: React.FC = () => {

  return (
    <>
      <StyledContainer>
        <StyledBox>
          <CustomTypographyTitle variant="h5" gutterBottom>
            Territoire Desservi
          </CustomTypographyTitle>
          <CustomTypographySubtitle variant="h2" gutterBottom>
          Je me déplace à domicile ou dans tout autre milieu de vie dans les territoires suivants : Saint-Jérôme, Montréal, Laval et les Laurentides.
          </CustomTypographySubtitle>
          <PictureContainer>
            <Picture src={map} alt="Contact" />
          </PictureContainer>
        </StyledBox>
      </StyledContainer>
    </>
  );
};

export default Territory;
