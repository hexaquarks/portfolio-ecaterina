import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
import { Element } from "react-scroll";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDarkMode } from '../../DarkModeContext';

import placeholder from "../../assets/image-placeholder.jpg";
import flowers from "../../assets/flowers.jpg";

import SucessModal from "./SuccessModal"

const StyledContainer = styled(Container)(({ theme }) => {
  const darkMode = useDarkMode();
  const backgroundColor = darkMode.isDarkMode ? 'black' : 'aliceblue';

  return { 
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

const StyledFormContainer = styled(Container)(({ theme }) => {
  const darkMode = useDarkMode();
  const backgroundColor = darkMode.isDarkMode ? 'black' : 'aliceblue';

  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    backgroundColor: `${backgroundColor}`,
    transition: 'background-color 0.5s',
  };
});

const FormTitle = styled(Typography)(({ theme }) => {
  const darkMode = useDarkMode();
  const textColor = darkMode.isDarkMode ? 'aliceblue' : 'black';

  return {
    color: `${textColor}`,
    fontSize: `clamp(40px, 4vw, 60px)`,
    fontWeight: '400',
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: theme.spacing(2),
  };
});

const StyledForm = styled("form")(({ theme }) => {
  const darkMode = useDarkMode();
  const backgroundColor = darkMode.isDarkMode ? 'black' : 'aliceblue';

  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    padding: "40px",
    backgroundColor: `${backgroundColor}`,
    transition: 'background-color 0.5s',
  }; 
});

const CustomFormLabel = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
});

const FormField = styled(TextField)(({ theme }) => {
  const darkMode = useDarkMode();
  const textColor = darkMode.isDarkMode ? 'aliceblue' : 'black';
  const underlineColor = darkMode.isDarkMode ? 'aliceblue' : 'rgba(0, 0, 0, 0.42)';
  const underlineColorHover = darkMode.isDarkMode ? 'white' : 'black';

  return {
    width: "100%",
    marginBottom: theme.spacing(2),
    "& .Mui-focused": {
      borderBottomColor: theme.palette.primary.main
    },
    "& .MuiInputLabel-root": {
      color: `${textColor}`,
      fontFamily: 'Inter, sans-serif',
      fontWeight: '500'
    },
    '& .MuiInputBase-root': {
      fontFamily: 'Inter, sans-serif',
    },
    '& .MuiInput-root:before': {
      borderBottom: `1px solid ${underlineColor}`
    },
    '& .MuiInput-root:hover:before': {
      borderBottom: `2px solid ${underlineColorHover}`
    }
  };
});

const FormButton = styled(Button)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(2),
}));

const StyledFormButton = styled(FormButton)(({ theme }) => {
  const darkMode = useDarkMode();
  const color = darkMode.isDarkMode ? 'aliceblue' : 'black';

  return {
    display: 'flex',
    width: '200px',
    border: `2px solid ${color}`,
    backgroundColor: 'transparent',
    color: `${color}`,
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px 20px',
    marginTop: '40px',
    cursor: 'pointer',
    transition: 'border-color 0.3s',
    borderRadius: 0,
    '& .MuiSvgIcon-root': {
      marginLeft: '20px',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: '#FFA500',
    }
  };
});

const PictureContainer = styled(Box)(({ theme }) => ({
  width: '550px',
  height: '525px',
  marginTop: theme.spacing(7),
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
}));

const Picture = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  height: "100%",
  objectFit: "cover",
}));

const StyledContentBox = styled(Box)(({ theme }) => ({
  width: "70%",
  height: "100%",
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    overflow: 'visible'
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  width: "100%",
  margin: 0,
  padding: 0,
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const FormComponent: React.FC = () => {
  const [state, handleSubmit] = useForm("xwkjqqvp");
  const [open, setOpen] = useState(false); // state to control the modal

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmission = (submission: any) => {
    handleSubmit(submission);
    handleOpen(); 
  }

  return (
    <Element id="ContacterScrollSection" name="ContacterScrollSection">
      <StyledContainer>
        <StyledBox>
          <PictureContainer>
            <Picture src={flowers} alt="Contact" />
          </PictureContainer>
          <StyledContentBox sx={{ width: "70%" }}>
            <StyledFormContainer>
              <FormTitle variant="h2" align="left">
                Me Contacter
              </FormTitle>
              <StyledForm onSubmit={handleFormSubmission}>
                <FormField id="name" label="Prénom" variant="standard" name="name" required />
                <FormField id="last-name" label="Nom" variant="standard" name="last-name" required />
                <FormField id="email" label="Email" type="email" variant="standard" name="email" required />
                <FormField id="phone-number" label="Numéro de téléphone" type="tel" variant="standard" name="phone-number" required />
                <FormField id="reason" label="Raison de consultation" variant="standard" name="reason" required />
                <StyledFormButton variant="contained" type="submit" style={{justifyContent: "flex-start"}}>
                  Soumettre
                  <ArrowForwardIcon/>
                </StyledFormButton>
              </StyledForm>
            </StyledFormContainer>
          </StyledContentBox>
        </StyledBox>
      </StyledContainer>
      <SucessModal open={open} handleClose={handleClose} />
    </Element>
  );
};

export default FormComponent;
