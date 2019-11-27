import React, { FunctionComponent, useState, useEffect } from 'react'
import { Route, Switch } from 'react-router';
import Header from './components/UI/Header';
import ShipsContainer from './containers/ShipsContainer';
import ThemeLayout from './components/UI/ThemeLayout';
import MainContainer from './containers/MainContainer';
import ShipItemContainer from './containers/ShipItemContainer';
import RocketsContainer from './containers/RocketsContainer';

interface IProps {
  toggleTheme: () => void;
}


const Routes: FunctionComponent<IProps> = ({ toggleTheme }) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [])

  const changeCheck = (): void => {
    setChecked(!checked);
    toggleTheme();
  };

  return (
    <>
      <Header checked={checked} changeCheck={changeCheck} />
      <Switch>
        <Route path='/' exact component={MainContainer} />
        <ThemeLayout checked={checked}>
          <Route path='/rockets' exact component={RocketsContainer} />
          <Route path='/ships/:id' exact component={ShipItemContainer} />
          <Route path='/ships' exact component={ShipsContainer} />
        </ThemeLayout>
      </Switch>
    </>
  )
}
export default Routes;