import React, { FunctionComponent } from 'react';
import { Typography, makeStyles, createStyles, Theme } from '@material-ui/core';
import classNames from 'classnames';

interface IProps {
  variant: 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'srOnly'
  | 'inherit';
  component?: any;
  className?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.type === "dark" ? '#fff' : '#000'
    }
  }))

const Text: FunctionComponent<IProps> = ({ component, variant, children, className }) => {
  const classes = useStyles();
  return (
    <Typography
      variant={variant}
      component={component}
      className={classNames(classes.root, className)}>
      {children}
    </Typography>
  )
}

export default Text;