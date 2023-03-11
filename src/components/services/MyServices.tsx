import * as React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import profilePicture from "../../assets/profile-picture.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CoverPageContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  "&.MuiContainer-root": {
    padding: 0
  }
}));

const ProfilePicture = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

const TitleContainer = styled('div')(({ theme }) => ({
  textAlign: 'left',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(5),
  marginRight: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    marginTop: 0,
    textAlign: 'center',
  },
  '& button': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #000',
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px 20px',
    marginTop: 'auto',
    cursor: 'pointer',
    transition: 'border-color 0.3s',
    borderRadius: 0,
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12)',
  },
  '& button:hover': {
    borderColor: 'orange',
  },
  '& button .MuiSvgIcon-root': {
    marginLeft: '10px',
  }
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontSize: `clamp(40px, 6vw, 90px)`,
  whiteSpace: 'pre-line',
  '& span': {
    fontSize: '25px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '300',
  },
  "&.MuiTypography-root": {
    lineHeight: '50%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left'
    }
  }
}));

const CustomTypographyTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: `clamp(40px, 6vw, 90px)`,
  whiteSpace: 'pre-line',
  '& span': {
    fontSize: '25px',
  },
  '& div': {
    fontSize: '30px',
  },
  "&.MuiTypography-root": {
    marginTop: theme.spacing(7),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

const CustomTypographyBottom = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'left'
  },
  fontSize: `clamp(25px, 3vw, 30px)`,
  fontWeight: '300',
  fontFamily: 'Inter, sans-serif',
}));

const CustomList = styled('ul')({
  listStyleType: 'square',
  marginBlockStart: '0.5em',
  marginBlockEnd: '0.5em',
  paddingLeft: '1em',
  '& li::marker': {
    fontSize: '1.2em',
    lineHeight: '1em',
  },
});

const CoverPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />
        <title>My Page Title</title>
        <meta name="description" content="This is a description of my page" />
      </Helmet>
      <CoverPageContainer maxWidth={false}>
        <Grid container justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6}>
            <TitleContainer>
              <CustomTypographyTitle variant="h5" gutterBottom>
                Mes Services
              </CustomTypographyTitle>
              <CustomList>
                <li>
                  <CustomTypography variant="body1">
                    <span>Évaluation psychosociale dans le cadre de l’ouverture d’une tutelle au majeur</span>
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography variant="body1">
                    <span>Évaluation psychosociale dans le cadre de l’homologation d’un Mandat de Protection</span>
                  </CustomTypography>
                </li>
              </CustomList>
              <CustomTypographyBottom variant="body1" gutterBottom>
                <div>Pour les personnes ayant une inaptitude ou en besoin d’être représentées.</div>
              </CustomTypographyBottom>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                <button>
                  Me contacter
                  <ArrowForwardIcon />
                </button>
              </div>
            </TitleContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <ProfilePicture src={profilePicture} alt="Profile Picture" />
          </Grid>
        </Grid>
      </CoverPageContainer>
    </>
  );
};

export default CoverPage;