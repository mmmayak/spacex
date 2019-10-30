import React, { FunctionComponent } from 'react';
import ShipItem from './ShipItem';

export interface Ship {
  id: string | number;
  name: string;
  image: string;
  key?: string | number;
}

interface IProps {
  ships: Ship[];
}

const ShipsList: FunctionComponent<IProps> = ({ ships }) => {
  return (
    <>
      {ships.map(ship => (
        <ShipItem {...ship} />
      ))}
    </>
  )
}

export default ShipsList;