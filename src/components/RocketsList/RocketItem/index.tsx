import React, { FunctionComponent, useState } from 'react';
import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, IconButton, Collapse, Theme, makeStyles, createStyles, Grid } from '@material-ui/core';
import { Rocket } from '..';
import { ExpandMore } from '@material-ui/icons';
import { amber } from '@material-ui/core/colors';
import classNames from 'classnames';
import { renderItem } from '../../../containers/ShipItemContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      width: '100%',
    },
    card: {
      maxWidth: 345,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%'
      }
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: amber[500]
    }
  })
)

const RocketItem: FunctionComponent<Rocket> = ({ name, company, description, country, type, success_rate_pct, first_flight, active }) => {
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <Grid item md={3} className={classes.item}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {name.substring(0, 1)}
            </Avatar>
          }
          title={name}
          subheader={company} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={classNames(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {renderItem({ country, type, success_rate_pct, first_flight, active }, '')}
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}

export default RocketItem;