import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import placeholder from "../../assets/image-placeholder.jpg";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginLeft: '0',
  marginRight: '0',
  width: '100%',
  maxWidth: 'unset',
  "&.MuiContainer-root.MuiContainer-maxWidthLg": {
    maxWidth: "unset"
  }
}));

const StyledFormContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "2rem",
  marginBottom: theme.spacing(2),
}));

const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",
  padding: "40px",
  backgroundColor: "white",
}));

const FormField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(2),
  "& .Mui-focused": {
    borderBottomColor: theme.palette.primary.main,
  },
}));

const FormButton = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  marginTop: theme.spacing(2),
}));

const PictureContainer = styled(Box)(({ theme }) => ({
  width: "30%",
  height: 0,
  paddingTop: "30%",
  position: "relative",
  borderRadius: "10px",
  overflow: "hidden",
}));

const Picture = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const StyledContentBox = styled(Box)({
  width: "70%",
  height: "100%",
  margin: 0,
  padding: 0,
  overflow: "auto",
});

const StyledContentPaper = styled(Paper)({
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
});

const FormComponent: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <StyledContainer>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "stretch", width: "100%", height: "100vh", margin: 0, padding: 0 }}>
        <PictureContainer sx={{ width: "30%" }}>
          <Picture src={placeholder} alt="Contact" />
        </PictureContainer>
        <StyledContentBox sx={{ width: "70%" }}>
          <StyledContentPaper elevation={0}>
            <StyledFormContainer>
              <FormTitle variant="h2" align="left">
                Contact Us
              </FormTitle>
              <StyledForm onSubmit={handleSubmit}>
                <FormField id="name" label="Name" variant="standard" required />
                <FormField id="last-name" label="Last Name" variant="standard" required />
                <FormField id="email" label="Email" type="email" variant="standard" required />
                <FormField id="phone-number" label="Phone number" type="tel" variant="standard" required />
                <FormField id="reason" label="Reason for consulting" variant="standard" required />
                <FormButton variant="contained" type="submit">
                  Submit
                </FormButton>
              </StyledForm>
            </StyledFormContainer>
          </StyledContentPaper>
        </StyledContentBox>
      </Box>
    </StyledContainer>
  );
};

export default FormComponent;


