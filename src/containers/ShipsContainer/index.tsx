import React, { FunctionComponent, useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { Grid, Theme, IconButton } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import ShipsList from '../../components/ShipsList';
import { ViewHeadline, ViewModule } from '@material-ui/icons';
import FetchHelper from '../../utils/helpers/FetchHelper';
import Layout from '../../components/UI/Layout';

interface IDirection {
  direction: 'row' | 'column';
  size: 4 | 8;
}

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
    root: {
      flexGrow: 1,
    },
    container: {
      width: '100%',
      margin: 0
    },
    button: {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  }))

const ShipsContainer: FunctionComponent = () => {
  const { loading, error, data } = useQuery(SHIPS);
  const [direction, setDirection] = useState<IDirection>({ direction: 'row', size: 4 });

  const classes = useStyles();

  const changeDirection = (): void => {
    if (direction.direction === 'row') {
      setDirection({ direction: 'column', size: 8 });
    } else {
      setDirection({ direction: 'row', size: 4 });
    }
  }
  return (
    <Layout>
      <div className={classes.root}>
        <FetchHelper
          loading={loading}
          error={!!error}>
          <Grid
            container
            direction="row"
            className={classes.button}>
            {direction.direction === 'row' ?
              <IconButton size='medium' onClick={changeDirection} color='secondary' style={{ marginLeft: 'auto' }}>
                <ViewHeadline />
              </IconButton>
              :
              <IconButton size='medium' onClick={changeDirection} color='secondary' style={{ marginLeft: 'auto' }}>
                <ViewModule />
              </IconButton>
            }
          </Grid>
          <Grid
            container
            direction={direction.direction}
            spacing={3}
            alignItems={direction.size === 4 ? 'flex-start' : 'center'}
            className={classes.container}>
            {data && <ShipsList ships={data.ships} size={direction.size} />}
          </Grid>
        </FetchHelper>
      </div>
    </Layout>
  )
}

export default ShipsContainer;
