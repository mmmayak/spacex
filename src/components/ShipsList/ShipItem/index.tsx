import React, { FunctionComponent } from 'react'
import { Ship } from '..';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const ShipItem: FunctionComponent<Ship> = ({ name, image }) => {
  return (
    <Grid item xs>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image={image} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ShipItem;