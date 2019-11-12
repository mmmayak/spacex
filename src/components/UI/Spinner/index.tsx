import React from 'react';
import { makeStyles, Theme, createStyles, CircularProgress } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      padding: '20px 0'
    },
  }),
);

const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  )
}

export default Spinner;