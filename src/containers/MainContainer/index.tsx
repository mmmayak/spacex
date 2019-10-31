import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
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
    video: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      objectFit: 'cover'
    }
  })
)

const MainContainer: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <video autoPlay muted loop className={classes.video}>
        <source src={mainBackground} type='video/mp4' />
      </video>
    </div>
  )
}
export default MainContainer;