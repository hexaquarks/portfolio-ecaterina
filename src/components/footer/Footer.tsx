import React from 'react';
import { Grid } from '@mui/material';
import { styled } from "@mui/material/styles";
import { Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';

import Ordre from "../../assets/ordre-des-travailleurs.png"
import Uqam from "../../assets/uqam.png"

// Define the images and text content for the footer
const iconContent = [
  {icon: <HomeIcon fontSize="large" />, content: '688, rue Lamontagne, St-Jérôme'},
  {icon: <EmailIcon fontSize="large" />, content: 'ecaterina_bujac@hotmail.com'},
  {icon: <PhoneIcon fontSize="large" />, content: '514-553-3991'}, 
  {icon: <LanguageIcon fontSize="large" />, content: 'Français, Roumain, Russe'}
];

const imageUrls = [Ordre, Uqam];

const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: '#A3D4FF',
  color: 'black',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const LeftColumn = styled(Grid)(({ theme }) => ({
  width: '25%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: theme.spacing(4),
  marginTop: theme.spacing(2),
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexDirection: 'row',
    width: '100%',
  },
}));


const Image = styled(Box)(({ theme }) => ({
  width: '200px',
  height: '100px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}));

const StyledImage = styled(Image)(({ theme }) => ({
  height: '100%',
  maxWidth: '200px',
  maxHeight: '100px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    maxHeight: '75px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: '250px',
    maxHeight: '125px',
  },
}));

const TextColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  paddingLeft: '20%',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0,
    margin: '0 auto'
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: '2%',
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  margin: '0.5rem 0',
  fontSize: 'clamp(16px, 2vw, 20px)',
  color: 'onyx',
  fontFamily: 'Inter, sans-serif',
  fontWeight: '400'
}));

const StyledIcon = styled(Box)(({ theme }) => ({
  marginRight: '2rem',
  fontSize: 'clamp(1rem, 2.5vw, 2rem)',
  [theme.breakpoints.down('sm')]: {
    marginRight: '0.75rem',
    width: '1.5rem',
    height: 'auto'
  },
}));

const LicenseText = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(20px, 2.25vw, 25px)',
  color: 'onyx',
  fontFamily: 'Inter, sans-serif',
  fontWeight: '500',
  width: '200px',
  textAlign: 'center',
  alignSelf: 'baseline',
  marginTop: theme.spacing(3),
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
    alignSelf: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 auto',
    marginBottom: theme.spacing(4)
  },
}));


// Define the Footer component
const Footer: React.FC = () => {
  return (
    <>
    <FooterContainer>
      <LeftColumn container>
        {imageUrls.map((url) => (
          <Grid item xs={6} sm={6} md={12} key={url}>
            <StyledImage style={{ backgroundImage: `url(${url})` }}>
              <Image style={{ backgroundColor: 'transparent' }} />
            </StyledImage>
          </Grid>
        ))}
      </LeftColumn>
      <Grid container item xs={12} sm={12} md={3} sx={{alignSelf: 'flex-start'}}>
        <LicenseText>N° de permis: BUJE13/02/010TS</LicenseText>
      </Grid>
      <Grid container item xs={12} sm={12} md={8}>
        <TextColumn>
          {iconContent.map(({ icon, content }) => (
            <Box key={content} display="flex" alignItems="center">
              <StyledIcon>{icon}</StyledIcon>
              <Text>{content}</Text>
            </Box>
          ))}
        </TextColumn>
      </Grid>
    </FooterContainer>
    </>
  );
};

export default Footer;
