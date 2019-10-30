import React, { FunctionComponent, useState } from 'react'
import { Route, Switch } from 'react-router';
import Header from './components/UI/Header';
import ShipsContainer from './containers/ShipsContainer';

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
        <Route path='/' exact component={ShipsContainer} />
      </Switch>
    </>
  )
}
export default Routes;