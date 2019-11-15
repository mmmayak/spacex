import React, { FunctionComponent, useState } from 'react'
import { Route, Switch } from 'react-router';
import Header from './components/UI/Header';
import ShipsContainer from './containers/ShipsContainer';
import ThemeLayout from './components/UI/ThemeLayout';
import MainContainer from './containers/MainContainer';
import ShipItemContainer from './containers/ShipItemContainer';

interface IProps {
  changeTheme: () => void;
}


const Routes: FunctionComponent<IProps> = ({ changeTheme }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const changeCheck = (): void => {
    setChecked(!checked);
    changeTheme();
  };

  return (
    <>
      <Header checked={checked} changeCheck={changeCheck} />
      <Switch>
        <Route path='/' exact component={MainContainer} />
        <ThemeLayout checked={checked}>
          <Route path='/ships/:id' exact component={ShipItemContainer} />
          <Route path='/ships' exact component={ShipsContainer} />
        </ThemeLayout>
      </Switch>
    </>
  )
}
export default Routes;