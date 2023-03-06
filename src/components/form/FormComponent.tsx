import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FormContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '2rem',
  marginBottom: theme.spacing(2),
}));

const Form = styled('form')(({ theme }) => ({
  width: "80%",
  maxWidth: "1000px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",
  padding: "40px",
  backgroundColor: "white",
  margin: "0 auto",
}));

const FormField = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  '& .Mui-focused': {
    borderBottomColor: theme.palette.primary.main,
  }
}));

const FormButton = styled(Button)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  marginTop: theme.spacing(2),
}));

const FormComponent: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <FormContainer>
      <FormTitle variant="h2" align="center">
        Contact Us
      </FormTitle>
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormField id="name" label="Name" variant="standard" required/>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField id="last-name" label="Last Name" variant="standard" required />
          </Grid>
          <Grid item xs={12}>
            <FormField id="email" label="Email" type="email" variant="standard" required />
          </Grid>
          <Grid item xs={12}>
            <FormField id="phone-number" label="Phone number" type="tel" variant="standard" required />
          </Grid>
          <Grid item xs={12}>
            <FormField id="reason" label="Reason for consulting" variant="standard" required />
          </Grid>
          <Grid item xs={12}>
            <FormButton variant="contained" type="submit">
              Submit
            </FormButton>
          </Grid>
        </Grid>
      </Form>
    </FormContainer>
  );
};

export default FormComponent;
