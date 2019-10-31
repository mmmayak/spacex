import React, { FunctionComponent } from 'react';
import ShipItem from './ShipItem';

export interface Ship {
  id: string | number;
  name: string;
  image: string;
  size: 4 | 8;
}

interface IProps {
  ships: Ship[];
  size: 4 | 8;
}

const ShipsList: FunctionComponent<IProps> = ({ ships, size }) => {
  return (
    <>
      {ships.map(ship => (
        <ShipItem {...ship} key={ship.id} size={size} />
      ))}
    </>
  )
}

export default ShipsList;