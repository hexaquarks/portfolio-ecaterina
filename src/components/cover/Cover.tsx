import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import profilePicture from "../../assets/profile-picture.jpg"

const CoverPageContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const ProfilePicture = styled('img')(({ theme }) => ({
  width: '100%',
  height: 600,
  maxWidth: 600,
  marginBottom: theme.spacing(10),

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
  },
}));

const TitleContainer = styled('div')(({ theme }) => ({
  textAlign: 'left',
  maxWidth: 600,
  height: '80%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
    whiteSpace: 'pre-line',
    '& span': {
      color: 'red',
      fontStyle: 'italic',
    },
  }));

const CoverPage: React.FC = () => {
  return (
    <CoverPageContainer>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} direction="column" justifyContent="space-between">
          <TitleContainer>
          <CustomTypography variant="h2" gutterBottom>
            Je suis Ecaterina Bujac,
            {'\n'}
           <span>votre</span> travailleuse sociale
           </CustomTypography>
           <Typography variant="h4">
               Ensemble, nous pouvons surmonter les défis de la vie
           </Typography>
          </TitleContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <ProfilePicture src={profilePicture} alt="Profile Picture" />
        </Grid>
      </Grid>
    </CoverPageContainer>
  );
};

export default CoverPage;
