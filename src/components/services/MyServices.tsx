import * as React from 'react';
import { Link, scroller } from "react-scroll";
import { styled } from '@mui/material/styles';
import { Element } from "react-scroll";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import profilePicture from "../../assets/extra-picture.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDarkMode } from '../../util/DarkModeContext';

const CoverPageContainer = styled(Container)(({ theme }) => {
  const darkMode = useDarkMode();
  const backgroundColor = darkMode.isDarkMode ? 'black' : 'aliceblue';

  return {
    backgroundColor: `${backgroundColor}`,
    transition: 'background-color 0.5s',
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
  };
});

const ProfilePicture = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

const TitleContainer = styled('div')(({ theme }) => {
  const darkMode = useDarkMode();
  const color = darkMode.isDarkMode ? 'aliceblue' : 'black';

  return {
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
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
    '& button': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `2px solid ${color}`,
      backgroundColor: 'transparent',
      color: `${color}`,
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '10px 20px',
      marginTop: 'auto',
      marginBottom: theme.spacing(2),
      cursor: 'pointer',
      transition: 'border-color 0.3s',
      borderRadius: 0,
      boxShadow: '0 2px 2px rgba(1, 0, 0, 0.24), 0 0 2px rgba(1, 0, 0, 0.12)',
    },
    '& button:hover': {
      borderColor: 'orange',
    },
    '& button .MuiSvgIcon-root': {
      marginLeft: '10px',
    }
  };
});

const CustomTypography = styled(Typography)(({ theme }) => {
  const darkMode = useDarkMode();
  const textColor = darkMode.isDarkMode ? 'aliceblue' : 'black';

  return {
    fontSize: `clamp(40px, 6vw, 90px)`,
    whiteSpace: 'pre-line',
    '& span': {
      color: `${textColor}`,
      fontSize: `clamp(18px, 2.5vw, 25px)`,
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
  };
});

const CustomTypographyTitle = styled(Typography)(({ theme }) => {
  const darkMode = useDarkMode();
  const textColor = darkMode.isDarkMode ? 'aliceblue' : 'black';

  return {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: `clamp(40px, 6vw, 90px)`,
    whiteSpace: 'pre-line',
    color: `${textColor}`,
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
  };
});

const CustomTypographyBottom = styled(Typography)(({ theme }) => {
  const darkMode = useDarkMode();
  const textColor = darkMode.isDarkMode ? 'aliceblue' : 'black';

  return {
    color: `${textColor}`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    fontSize: `clamp(25px, 3vw, 30px)`,
    fontWeight: '300',
    fontFamily: 'Inter, sans-serif',
  };
});

const CustomList = styled('ul')(({ theme }) => {
  const darkMode = useDarkMode();
  const color = darkMode.isDarkMode ? 'aliceblue' : 'black';

  return {
    listStyleType: 'square',
    marginBlockStart: '0.5em',
    marginBlockEnd: '0.5em',
    paddingLeft: '1em',
    '& li::marker': {
      color: `${color}`,
      fontSize: '1.2em',
      lineHeight: '1em',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(1)
    }
  };
});

const CoverPage: React.FC = () => {
  return (
    <Element id="ServicesScrollSection" name="ServicesScrollSection">
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
                <Link
                  to="ContacterScrollSection"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  <button>
                    Me contacter
                    <ArrowForwardIcon />
                  </button>
                </Link>
              </div>
            </TitleContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <ProfilePicture src={profilePicture} alt="Profile Picture" />
          </Grid>
        </Grid>
      </CoverPageContainer>
    </Element>
  );
};

export default CoverPage;