import React, { FunctionComponent } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router';
import { Grid, Theme, Typography, createStyles, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

import './index.css';

import Text from '../../components/UI/StyledComponents/Typography';
import Layout from '../../components/UI/Layout';
import FetchHelper from '../../utils/helpers/FetchHelper';
import checkForUndefined from '../../utils/helpers/checkForUndefined';
import noImage from '../../assets/images/no-image.png';


export const GET_SHIP = gql`
    query Ship($id: ID!) {
      ship(id: $id){
      name
      image
      model
      type
      year_built
      active
      weight_kg
      status
      home_port
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imgContainer: {
      height: '450px',
      position: 'relative',
      WebkitBoxShadow: theme.palette.type === 'dark' ? '-1px 4px 8px 0px rgba(255,255,255,1)' : '-1px 4px 8px 0px rgba(0,0,0,0.75)',
      MozBoxShadow: theme.palette.type === 'dark' ? '-1px 4px 8px 0px rgba(255,255,255,1)' : '-1px 4px 8px 0px rgba(0,0,0,0.75)',
      boxShadow: theme.palette.type === 'dark' ? '-1px 4px 8px 0px rgba(255,255,255,1)' : '-1px 4px 8px 0px rgba(0,0,0,0.75)',
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
      [theme.breakpoints.down('xs')]: {
        fontSize: '28px'
      }
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
      padding: '20px 0',
      [theme.breakpoints.down('xs')]: {
        paddingTop: 0
      }
    },
    content: {
      textAlign: 'center',
      padding: '0 15px',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginTop: 20
      }
    },
    textTitle: {
      marginRight: '5px',
      textTransform: 'capitalize'
    },
    description: {
      marginTop: 30
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


export const renderItem = (data: any, classes: any) => {
  const items = Object.keys(data).map(key =>
    <div className={classes.textCont} key={key} style={{ marginBottom: '10px' }}>
      <Text
        className={classes.textTitle}
        variant="h6">
        {key}:
    </Text>
      <Text
        variant="inherit">
        {checkForUndefined(data[key])}
      </Text>
    </div>);
  return items;
}

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
              <img className={classes.img} src={data && data.ship.image ? data.ship.image : noImage} alt="" />
            </div>
          </Grid>
          <Grid item sm={6} className={classes.content}>
            <Typography
              className={classNames(classes.title, 'title-animation', {
                'dark': theme.palette.type === 'dark',
                'light': theme.palette.type === 'light'
              })}
              variant="h4">{data && data.ship.name}
              <span className={classNames('title-animation-sub', {
                'dark': theme.palette.type === 'dark',
                'light': theme.palette.type === 'light'
              })}></span>
            </Typography>
            <Grid container direction="column" className={classes.description}>
              {data && renderItem({
                model: data.ship.model,
                type: data.ship.type,
                year_built: data.ship.year_built,
                weight_kg: data.ship.weight_kg,
                active: data.ship.active,
                status: data.ship.status,
                home_port: data.ship.home_port
              }, classes)}
            </Grid>
          </Grid>
        </Grid>
      </FetchHelper>
    </Layout >

  )
}

export default ShipItemContainer;