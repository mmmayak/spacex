import React, { FunctionComponent } from 'react'
import { Ship } from '..';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Theme, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import noImage from '../../../assets/images/no-image.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      width: '100%'
    },
    name: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }))

const ShipItem: FunctionComponent<Ship> = ({ id, name, image, size }) => {
  const classes = useStyles();

  return (
    <Grid item sm={size} className={classes.item}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image ? image : noImage} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.name}>
              {name}
            </Typography>
          </CardContent>
         
        </CardActionArea>
        <CardActions>
          <Button component={Link} to={`/ships/${id}`} size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ShipItem;