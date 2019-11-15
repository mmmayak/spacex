import React, { FunctionComponent } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router';
import { Grid, Theme, Typography, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Text from '../../components/UI/StyledComponents/Typography';
import classNames from 'classnames';

import './index.css';


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
      position: 'relative'
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    title: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)'
    },
    '@keyframes textclip': {
      to: {
        backgroundPosition: '200% center'
      }
    }
  }))

const ShipItemContainer: FunctionComponent = () => {
  const classes = useStyles();

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SHIP, {
    variables: { id }
  });
  return (
    <>
      <div className={classes.imgContainer}>
        <div className={classes.overlay}></div>
        <img className={classes.img} src={data && data.ship.image} alt="" />
        <Typography
          className={classNames(classes.title, 'title-animation')}
          variant="h4"
          component="h2">{data && data.ship.name}</Typography>
      </div>
      <Grid container>

        {
          data
          &&


          <div>
            <Text
              variant="inherit"
              component="p">
              {data && data.ship.name}
            </Text>
          </div>

        }
      </Grid>
    </>
  )
}

export default ShipItemContainer;