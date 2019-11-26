import React, { FunctionComponent, useState, MouseEvent } from 'react'
import { Ship } from '..';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Theme, createStyles, Popover, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import noImage from '../../../assets/images/no-image.png';
import { Link } from 'react-router-dom';
import PopoverItemData from '../../UI/PopoverItemData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      width: '100%'
    },
    name: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    paper: {
      padding: theme.spacing(3, 2),
    }
  }))

const ShipItem: FunctionComponent<Ship> = ({ id, name, image, size, type, year_built, model, status }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <Grid item sm={size} className={classes.item}>
      <Card>
        <CardActionArea onClick={handleClick}>
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
        <PopoverItemData
          type={type}
          model={model}
          status={status}
          year_built={year_built}
          open={open}
          handleClose={handleClose}
          classes={classes}
          anchorEl={anchorEl} />
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