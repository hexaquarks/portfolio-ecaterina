import React from 'react'
import Placeholder from '../../assets/image-placeholder.jpg'
import { makeStyles } from 'tss-react/mui';
import { Background, Parallax } from 'react-parallax';
import { Grid, Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => {
    return {
      root: {
        color: theme.palette.primary.main,
        height: "100vh"
      },
      grid: {
        paddingTop: "5%"
      },
      description: {
        backgroundColor: "gray"
      },
      title: {

      },
      subtitle: {

      },
      image: {
        backgroundColor: "gray"
      },
    };
  });

const Cover = () => {
    const { classes } = useStyles();
    return (
        <Parallax className={classes.root} bgImage={Placeholder} strength={800}>
            <Grid container className={classes.grid}>
                <Grid item sm={8} className={classes.description}>
                    <Typography variant="h1" className={classes.title}>
                        Ecaterina Bujac
                    </Typography>
                    <Typography variant="h3" className={classes.subtitle}>
                        Travailleuse Sociale
                    </Typography>
                </Grid>
                <Grid item sm={4} className={classes.image}>
                    <img src={Placeholder}/>
                </Grid>
            </Grid>
        </Parallax>
    )
}

export default Cover