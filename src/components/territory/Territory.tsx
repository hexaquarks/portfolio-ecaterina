import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Helmet } from 'react-helmet';
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import map from "../../assets/map.png";

const StyledContainer = styled(Container)(({ theme }) => ({
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
  backgroundColor: "aliceblue",
}));

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
  
  const CustomTypographyTitle = styled(Typography)(({ theme }) => ({
    fontSize: `clamp(40px, 4vw, 60px)`,
    fontWeight: '400',
    fontFamily: 'Montserrat, sans-serif',
    marginTop: theme.spacing(3),
  }));


const Territory: React.FC = () => {
  
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"/>
          <title>My Page Title</title>
          <meta name="description" content="This is a description of my page" />
      </Helmet>
      <StyledContainer>
        <StyledBox>
          <CustomTypographyTitle variant="h5" gutterBottom>
             Territoire Desservi
           </CustomTypographyTitle>
          <PictureContainer>
            <Picture src={map} alt="Contact" />
          </PictureContainer>
        </StyledBox>
      </StyledContainer>
      </>
  );
};

export default Territory;
