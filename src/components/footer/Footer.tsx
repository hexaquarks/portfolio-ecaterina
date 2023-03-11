import React from 'react';
import { Helmet } from 'react-helmet';
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
  {icon: <HomeIcon fontSize="large" />, content: '688, rue Lamontagne, St-Jerome'},
  {icon: <EmailIcon fontSize="large" />, content: 'ecaterina_bujac@hotmail.com'},
  {icon: <PhoneIcon fontSize="large" />, content: '514-553-3991'}, 
  {icon: <LanguageIcon fontSize="large" />, content: 'Français, Roumain, Russe'}
];

const imageUrls = [Ordre, Uqam];

// Define the styles for the Footer component
const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: '#A3D4FF',
  color: 'black',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    flexDirection: 'column'
  },
}));

const LeftColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '1rem',
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  },
}));

const Image = styled(Box)(({ theme }) => ({
  width: '200px',
  height: '100px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}));

const TextColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  paddingLeft: '20%',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  margin: '0.5rem 0',
  fontSize: 'clamp(16px, 2vw, 20px)',
  color: 'onyx',
  fontFamily: 'Inter, sans-serif',
  fontWeight: '400'
}));

const StyledImage = styled(Image)(({ theme }) => ({
  width: '100%',
  height: '100%'
}));

const StyledIcon = styled(Box)(({ theme }) => ({
  marginRight: '2rem',
  fontSize: 'clamp(1rem, 2.5vw, 2rem)',
}));


// Define the Footer component
const Footer: React.FC = () => {
  return (
    <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"/>
    </Helmet>
    <FooterContainer>
      <LeftColumn>
        {imageUrls.map((url) => (
          <StyledImage key={url} style={{ backgroundImage: `url(${url})` }}>
            <Image style={{ backgroundImage: `url(${url})` }} />
          </StyledImage>
        ))}
      </LeftColumn>
      <TextColumn>
        {iconContent.map(({ icon, content }) => (
          <Box key={content} display="flex" alignItems="center">
            <StyledIcon>{icon}</StyledIcon>
            <Text>{content}</Text>
          </Box>
        ))}
      </TextColumn>
    </FooterContainer>
    </>
  );
};

export default Footer;
