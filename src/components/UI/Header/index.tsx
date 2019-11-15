import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, Switch } from '@material-ui/core';
import blackLogo from '../../../assets/images/black-logo.png';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

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

const Header: FunctionComponent<IProps> = (props) => {
  const classes = useStyles();
  const { checked, changeCheck } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Layout>
          <Toolbar>
            <Link
              to="/"
              className={classes.imgCont}>
              <img className={classes.img} src={checked ? logo : blackLogo} alt="rocket logo" />
            </Link>
            <div style={{ marginLeft: 'auto' }}>
              <Button
                to="/ships"
                component={Link}
                color='secondary'>
                Ships
              </Button>
              <Button
                color='secondary'
                to="/rockets"
                component={Link}>
                Rockets
              </Button>
              <Switch onChange={changeCheck} value={checked} />
            </div>
          </Toolbar>
        </Layout>
      </AppBar>
    </div>
  )
}

export default Header;