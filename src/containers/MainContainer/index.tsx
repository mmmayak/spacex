import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const mainBackground = require('../../assets/videos/mainBackground.mp4');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      position: 'relative',
      width: '100%',
      minHeight: 'calc(100vh - 64px)',
      [theme.breakpoints.down('xs')]: {
        minHeight: 'calc(100vh - 56px)'
      },
    },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: theme.palette.type === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255, 0.3)',
      zIndex: 1000
    },
    video: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      objectFit: 'cover',
      zIndex: 100
    },
    buttonsCont: {
      position: 'absolute',
      top: '30%',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      maxWidth: 300,
      width: '100%',
    },
    btn: {
      width: '100%',
      marginBottom: theme.spacing(2),
      '&:last-child': {
        marginBottom: 0,

      }
    }
  })
)

const MainContainer: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.overlay}></div>
      <video autoPlay muted loop className={classes.video}>
        <source src={mainBackground} type='video/mp4' />
      </video>
      <div className={classes.buttonsCont}>
        <Button
          className={classes.btn}
          component={Link}
          variant='contained'
          color='secondary'
          to='/ships'>
          Ships
        </Button>
        <Button
          className={classes.btn}
          component={Link}
          variant='contained'
          color='secondary'
          to='/rockets'>
          Rockets
        </Button>
      </div>
    </div>
  )
}
export default MainContainer;