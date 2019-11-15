import React, { FunctionComponent } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';

interface Props {
  checked: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    black: {
      background: '#000',
      minHeight: 'calc(100vh - 64px)',
      [theme.breakpoints.down('xs')]: {
        minHeight: 'calc(100vh - 56px)'
      }
    },
    white: {
      background: '#fff',
      minHeight: 'calc(100vh - 64px)',
      [theme.breakpoints.down('xs')]: {
        minHeight: 'calc(100vh - 56px)'
      }
    }
  }))

const ThemeLayout: FunctionComponent<Props> = (props: any) => {
  const classes = useStyles();
  return (
    <div className={props.checked ? classes.black : classes.white}>
      {props.children}
    </div>
  )
}

export default ThemeLayout;