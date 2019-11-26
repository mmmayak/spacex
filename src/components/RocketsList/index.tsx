import React, { FunctionComponent } from 'react';
import RocketItem from './RocketItem';

export interface Rocket {
  id: string | number;
  name: string;
  type: string;
  description: string;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  cost_per_launch: number;
  active: boolean;
  company: string;
}

interface IProps {
  rockets: Rocket[];
}

const RocketsList: FunctionComponent<IProps> = ({ rockets }) => {
  return (
    <>
      {rockets.map(rocket => (
        <RocketItem {...rocket} key={rocket.id} />
      ))}
    </>
  )
}

export default RocketsList;