import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

import placeholder from "../../assets/image-placeholder.jpg";
import { ThreeMpOutlined } from "@mui/icons-material";

const MyServicesWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f7f7f7",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
  },
}));

const MyServicesTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: theme.spacing(5),
}));

const ServiceContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(10),
  },
  marginLeft: theme.spacing(5),
  marginRight: theme.spacing(5)
}));

const ServiceImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: theme.spacing(1),
}));

const ServiceTitle = styled(Typography)({
  fontWeight: "bold",
  marginTop: 12,
  marginBottom: 12,
});

const ServiceDescription = styled(Typography)({
  marginBottom: 24,
});

const services = [
  {
    image: placeholder,
    title: "Service 1",
    description: "Description 1",
  },
  {
    image: placeholder,
    title: "Service 2",
    description: "Description 2",
  },
];

const MyServices = () => {
  return (
    <MyServicesWrapper>
      <MyServicesTitle variant="h4">Mes services professionnels</MyServicesTitle>
      <Grid container spacing={4} alignItems="stretch">
        {services.map((service, index) => (
          <Grid key={index} item xs={12} md={6}>
            <ServiceContainer>
              <ServiceTitle variant="h6">{service.title}</ServiceTitle>
              <ServiceImage src={service.image} alt={service.title} />
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContainer>
          </Grid>
        ))}
      </Grid>
    </MyServicesWrapper>
  );
};

export default MyServices;
