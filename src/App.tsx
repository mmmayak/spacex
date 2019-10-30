import React, { useState, FunctionComponent } from 'react';
import { Theme, Typography, Button, Grid, makeStyles, createStyles, Card, CardContent, CardMedia, IconButton, CardActionArea, CardActions } from '@material-ui/core';
import Header from './components/UI/Header';
import { ViewModule, ViewHeadline } from '@material-ui/icons';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

interface IProps {
  changeTheme: () => void;
}

interface IDirection {
  direction: 'row' | 'column';
  size: 4 | 8;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      margin: 0,
      background: theme.palette.type === 'dark' ? '#000' : '#fff',
    },
    paper: {
      minHeight: 70
    }
  }));

const SHIPS = gql`
    {
      ships {
        id
        name
        image
      }
    }
  `;

const App: FunctionComponent<IProps> = ({ changeTheme }) => {
  const { loading, error, data } = useQuery(SHIPS);

  const classes = useStyles();
  const [checked, setChecked] = useState<boolean>(false);
  const [direction, setDirection] = useState<IDirection>({ direction: 'row', size: 4 });

  const changeCheck = (): void => {
    setChecked(!checked);
    changeTheme();
  };

  const changeDirection = (): void => {
    if (direction.direction === 'row') {
      setDirection({ direction: 'column', size: 8 });
    } else {
      setDirection({ direction: 'row', size: 4 });
    }
  };

  return (
    <div className={classes.root}>
      <div style={{ display: 'flex' }}>
        {direction.direction === 'row' ?
          <IconButton size='small' onClick={changeDirection} color='secondary' style={{ marginLeft: 'auto' }}>
            <ViewHeadline />
          </IconButton>
          :
          <IconButton size='small' onClick={changeDirection} color='secondary' style={{ marginLeft: 'auto' }}>
            <ViewModule />
          </IconButton>

        }
      </div>
      <Grid container direction={direction.direction} alignItems='center' spacing={3} className={classes.root}>
        {data && data.ships.map((ship: { id: string | number | undefined; image: string | undefined; name: React.ReactNode; }) => (
          <Grid item xs={direction.size} key={ship.id}>
            <Card>
              <CardActionArea>
                {ship.image ?
                  <CardMedia
                    component="img"
                    height="100"
                    image={ship.image}
                  />
                  : <div>loading...</div>}


                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {ship.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
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
        ))}
      </Grid>
    </div>
  );
}

export default App;
