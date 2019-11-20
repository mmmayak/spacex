import React, { FunctionComponent } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router';
import { Grid, Theme, Typography, createStyles, ExpansionPanel, ExpansionPanelSummary, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Text from '../../components/UI/StyledComponents/Typography';
import classNames from 'classnames';

import './index.css';
import Layout from '../../components/UI/Layout';
import FetchHelper from '../../utils/helpers/FetchHelper';
import checkForUndefined from '../../utils/helpers/checkForUndefined';


const GET_SHIP = gql`
    query Ship($id: ID!) {
      ship(id: $id){
      name
      image
      model
      type
      year_built
      active
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imgContainer: {
      height: '450px',
      position: 'relative',
      [theme.breakpoints.down('xs')]: {
        height: '350px'
      }
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    title: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)'
    },
    container: {
      paddingTop: 20,
      [theme.breakpoints.down('xs')]: {
        paddingTop: 0
      }
    },
    content: {
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginTop: 20
      }
    },
    textTitle: {
      marginRight: '5px'
    },
    description: {
      marginTop: 30,
      padding: '0 15px'
    },
    textCont: {
      textAlign: "left",
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center'
      }
    }
  }))

const ShipItemContainer: FunctionComponent = () => {
  const classes = useStyles();
  const theme = useTheme();

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SHIP, {
    variables: { id }
  });

  return (
    <Layout>
      <FetchHelper loading={loading} error={!!error}>
        <Grid container className={classes.container}>
          <Grid item sm={6} style={{ width: '100%' }}>
            <div className={classes.imgContainer}>
              <img className={classes.img} src={data && data.ship.image} alt="" />
            </div>
          </Grid>
          <Grid item sm={6} className={classes.content}>
            <Typography
              className={classNames(classes.title, 'title-animation', {
                'dark': theme.palette.type === 'dark',
                'light': theme.palette.type === 'light'
              })}
              variant="h3">{data && data.ship.name}
              <span className={classNames('title-animation-sub', {
                'dark': theme.palette.type === 'dark',
                'light': theme.palette.type === 'light'
              })}></span>
            </Typography>
            <Grid container direction="column" className={classes.description}>
              <div className={classes.textCont}>
                <Text
                  className={classes.textTitle}
                  variant="h6">
                  Model:
            </Text>
                <Text
                  variant="inherit">
                  {data && checkForUndefined(data.ship.model)}
                </Text>
              </div>
              <div className={classes.textCont}>
                <Text
                  className={classes.textTitle}
                  variant="h6">
                  Type:
            </Text>
                <Text
                  variant="inherit">
                  {data && data.ship.type}
                </Text>
              </div>
              <div className={classes.textCont}>
                <Text
                  className={classes.textTitle}
                  variant="h6">
                  Built year:
            </Text>
                <Text
                  variant="inherit">
                  {data && data.ship.year_built} year
            </Text>
              </div>
              <div className={classes.textCont}>
                <Text
                  className={classes.textTitle}
                  variant="h6">
                  Active:
            </Text>
                <Text
                  variant="inherit">
                  {data && data.ship.active}
                </Text>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </FetchHelper>
    </Layout >

  )
}

export default ShipItemContainer;