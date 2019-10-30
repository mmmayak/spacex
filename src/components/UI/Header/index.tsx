import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, Switch } from '@material-ui/core';
import blackLogo from '../../../assets/images/black-logo.png';
import logo from '../../../assets/images/logo.png';

interface IProps {
  checked: boolean;
  changeCheck: () => void;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  imgCont: { width: '40px' },
  img: { width: '100%', height: '100%', objectFit: 'contain' }
})
)

const Header: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const { checked, changeCheck } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <div className={classes.imgCont}>
            <img className={classes.img} src={checked ? logo: blackLogo} alt="" />
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Button color='secondary'>Sheeps</Button>
            <Button color='secondary'>Rockets</Button>
            <Switch onChange={changeCheck} value={checked} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;