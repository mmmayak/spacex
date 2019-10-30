import React, { FunctionComponent } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { Grid, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import ShipsList from '../../components/ShipsList';

const SHIPS = gql`
    {
      ships {
        id
        name
        image
      }
    }
  `;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      margin: 0
    }
  }))

const ShipsContainer: FunctionComponent = () => {
  const { loading, error, data } = useQuery(SHIPS);
  const classes = useStyles();
  console.log(data)
  return (
    <Grid
      container
      direction='row'
      spacing={3}
      className={classes.container}>
      {data && <ShipsList ships={data.ships} />}
    </Grid>
  )
}
export default ShipsContainer;
