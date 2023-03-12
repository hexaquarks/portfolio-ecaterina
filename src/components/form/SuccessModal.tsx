import { styled } from "@mui/material/styles";
import { Helmet } from 'react-helmet';
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '90%',
  maxWidth: 400,
  padding: '40px',
  textAlign: 'center',
  backgroundColor: 'aliceblue',
  boxShadow: theme.shadows[5],
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '70vw',
  },
  '& .MuiTypography-root': {
    fontSize: 'clamp(20px, 2vw, 35px)',
    fontWeight: 'bold',
    fontFamily: 'Montserrat, sans-serif',
    color: '#333',
    lineHeight: 1.5,
    marginTop: '50px',
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '200px',
  border: '2px solid #000',
  backgroundColor: 'transparent',
  color: '#000',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '10px 20px 10px 40px',
  marginTop: '40px',
  cursor: 'pointer',
  transition: 'border-color 0.3s',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: 'transparent',
    borderColor: '#FFA500',
  },
  '& .MuiSvgIcon-root': {
    marginLeft: '20px',
  },
}));

const CheckIconWrapper = styled(CheckIcon)(({ theme }) => ({
  position: 'absolute',
  top: '-50px',
  left: 'calc(50% - 50px)',
  fontSize: '100px',
  color: '#00C853',
  border: '3px solid aliceblue',
  borderRadius: '50%',
  padding: '10px',
  backgroundColor: 'aliceblue',
}));

const SuccessModal = ({ open, handleClose }: any) => {
  return (
    <>
    <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"/>
          <title>My Page Title</title>
          <meta name="description" content="This is a description of my page" />
      </Helmet>
    <StyledModal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <StyledPaper>
        <CheckIconWrapper />
        <Typography variant="h5" component="h2" id="modal-title" gutterBottom>
          Votre message a été envoyé avec succès! Je vous répondrai dans les plus brefs délais.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
          <StyledButton variant="contained" onClick={handleClose}>
            Fermer
            <ArrowForwardIcon/>
          </StyledButton>
        </Stack>
      </StyledPaper>
    </StyledModal>
    </>
  );
};

export default SuccessModal;
