import React, { FunctionComponent } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';

interface Props {
  checked: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    black: {
      padding: '20px 0',
      background: '#000'
    },
    white: {
      padding: '20px 0',
      background: '#fff'
    }
  }))

const Layout: FunctionComponent<Props> = (props: any) => {
  const classes = useStyles();
  return (
    <div className={props.checked ? classes.black : classes.white}>
      {props.children}
    </div>
  )
}

export default Layout;