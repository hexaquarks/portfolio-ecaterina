import * as React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import profilePicture from "../../assets/profile-picture.jpg";

const CoverPageContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  backgroundColor: 'aliceblue',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  "&.MuiContainer-root": {
    padding: 0,
    paddingTop: theme.spacing(6),
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
  marginLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    marginTop: 0,
    textAlign: 'center',
  },
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: `clamp(40px, 6vw, 90px)`,
  fontWeight: '300',
  whiteSpace: 'pre-line',
  '& span': {
    color: '#FFCEA3',
    fontStyle: 'italic',
  },
  "&.MuiTypography-root": {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

const CustomTypographyBottom = styled(Typography)(({ theme }) => ({
  fontFamily: 'Inter, sans-serif',
  fontWeight: '200',
  fontSize: `clamp(20px, 4vw, 60px)`,
  marginBottom: theme.spacing(3),
}));

const CoverPage: React.FC = () => {
  return (
    <>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"/>
        <title>My Page Title</title>
        <meta name="description" content="This is a description of my page" />
      </Helmet>
      <CoverPageContainer maxWidth={false}>
        <Grid container justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6}>
            <ProfilePicture src={profilePicture} alt="Profile Picture" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TitleContainer>
              <CustomTypography variant="h2" gutterBottom>
                Je suis Ecaterina,
                {'\n'}
                <span>votre</span> travailleuse sociale.
              </CustomTypography>
                <CustomTypographyBottom variant="h4">
                  Ensemble, nous pouvons surmonter les défis de la vie
                </CustomTypographyBottom>
            </TitleContainer>
          </Grid>
        </Grid>
      </CoverPageContainer>
    </>
  );
};

export default CoverPage;
