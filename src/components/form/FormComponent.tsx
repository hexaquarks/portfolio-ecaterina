import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { styled } from "@mui/material/styles";
import { Helmet } from 'react-helmet';
import { Box, Paper } from "@mui/material";
import { Element } from "react-scroll";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import placeholder from "../../assets/image-placeholder.jpg";
import flowers from "../../assets/flowers.jpg";

const StyledContainer = styled(Container)(({ theme }) => ({
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

const StyledFormContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.spacing(5),
  backgroundColor: "aliceblue",
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: `clamp(40px, 4vw, 60px)`,
  fontWeight: '400',
  fontFamily: 'Montserrat, sans-serif',
  marginBottom: theme.spacing(2),
}));

const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  padding: "40px",
  backgroundColor: "aliceblue",
}));

const CustomFormLabel = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
});

const FormField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(2),
  "& .Mui-focused": {
    borderBottomColor: theme.palette.primary.main,
  },
  "& .MuiInputLabel-root": {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500'
  },
  '& .MuiInputBase-root': {
    fontFamily: 'Inter, sans-serif'
  },
}));

const FormButton = styled(Button)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(2),
}));

const StyledFormButton = styled(FormButton)(({ theme }) => ({
  display: 'flex',
  width: '200px',
  border: '2px solid #000',
  backgroundColor: 'transparent',
  color: '#000',
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
  },
}));

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
  height: "100vh",
  margin: 0,
  padding: 0,
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
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"/>
          <title>My Page Title</title>
          <meta name="description" content="This is a description of my page" />
      </Helmet>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Paper sx={{ width: 400, padding: '40px', textAlign: 'center' }}>
            <Typography variant="h5" component="h2" id="modal-title" gutterBottom>
              Votre message a été envoyé avec succès! Je vous répondrai dans les plus brefs délais.
            </Typography>
            <Button variant="contained" onClick={handleClose}>
              Fermer
            </Button>
          </Paper>
        </Box>
      </Modal>
    </Element>
  );
};

export default FormComponent;
