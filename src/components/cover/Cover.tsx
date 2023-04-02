import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Element } from 'react-scroll';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import profilePicture from "../../assets/profile-picture.jpg";
import { useDarkMode } from '../../DarkModeContext';

const StyledCover = styled('div')(({ theme }) => {
  const darkMode = useDarkMode();
  const backgroundColor = darkMode.isDarkMode ? 'rgba(34,34,34,1)' : 'rgba(255,255,255,1)';

  return {
    background: `radial-gradient(circle, ${backgroundColor} 0%, ${backgroundColor} 100%)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };
});

const CoverPageContainer = styled(Container)(({ theme }) => {
  const darkMode = useDarkMode();
  const backgroundColor = darkMode.isDarkMode ? 'black' : 'aliceblue';

  return {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: backgroundColor,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    "&.MuiContainer-root": {
      padding: 0,
      paddingTop: theme.spacing(6),
    },
  };
});

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
  },
}));

const CustomTypography = styled(Typography)(({ theme }) => {
  const darkMode = useDarkMode();
  const textColor = darkMode.isDarkMode ? 'aliceblue' : 'black';

  return {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: `clamp(34px, 6vw, 90px)`,
    fontWeight: '300',
    whiteSpace: 'pre-line',
    color: `${textColor}`,
    '& span': {
      color: '#FFCEA3',
      fontStyle: 'italic',
    },
    "&.MuiTypography-root": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(6)
    }
  };
});

const CustomTypographyBottom = styled(Typography)(({ theme }) => {
  const darkMode = useDarkMode();
  const textColor = darkMode.isDarkMode ? 'aliceblue' : 'black';

  return {
    color: `${textColor}`,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '200',
    fontSize: `clamp(20px, 4vw, 60px)`,
    marginBottom: theme.spacing(3)
  };
});

const CoverPage: React.FC = () => {
  return (
    <Element id="AccueilScrollSection" name="AccueilScrollSection">
      <StyledCover>
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
      </StyledCover>
    </Element>
  );
};

export default CoverPage;
