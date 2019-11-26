import React, { FunctionComponent } from 'react';
import Layout from '../../components/UI/Layout';
import FetchHelper from '../../utils/helpers/FetchHelper';
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import RocketsList from '../../components/RocketsList';

const ROCKETS = gql`
  {
    rockets {
      id
      name
      type
      description
      success_rate_pct
      first_flight
      country
      cost_per_launch
      company
      active
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
    }
  }))

const RocketsContainer: FunctionComponent = () => {
  const { loading, error, data } = useQuery(ROCKETS);

  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <FetchHelper
          loading={loading}
          error={!!error}>
          <Grid
            container
            spacing={3}
            className={classes.container}>
            {data && <RocketsList rockets={data.rockets} />}
          </Grid>
        </FetchHelper>
      </div>
    </Layout>
  )
}

export default RocketsContainer;