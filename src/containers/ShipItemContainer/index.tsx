import React, { FunctionComponent } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router';

const GET_SHIP = gql`
    query Ship($id: ID!) {
      ship(id: $id){
      ship
      name
      image
      model
      type
      year_built
      active
    }
  }
`;

const ShipItemContainer: FunctionComponent = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SHIP, {
    variables: { id }
  });

  return (
    <div>

    </div>
  )
}

export default ShipItemContainer;