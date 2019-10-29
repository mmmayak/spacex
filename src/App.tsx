import React, { useState, FunctionComponent } from 'react';
import { Theme, AppBar, Toolbar, Typography, Button, Grid, Paper, makeStyles, createStyles, Card, CardContent, CardMedia, IconButton, CardActionArea, CardActions } from '@material-ui/core';
import Header from './components/UI/Header';
import { ViewModule, ViewHeadline } from '@material-ui/icons'

interface IProps {
  changeTheme: () => void;
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
      minHeight: 70,
      /* margin: 10, 
      padding: 10 */
    }
  }))

const App: FunctionComponent<IProps> = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [direction, setDirection] = useState({ direction: 'row', size: 4 }) as any;

  const changeCheck = (): void => {
    setChecked(!checked);
    props.changeTheme();
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
      <Header checked={checked} changeCheck={changeCheck} />
      <div style={{ display: 'flex' }}>
        {direction.direction === 'row' ?
          <IconButton size='small' onClick={changeDirection} color='secondary' style={{ marginLeft: 'auto' }}>
            <ViewModule />
          </IconButton>
          :
          <IconButton size='small' onClick={changeDirection} color='secondary' style={{ marginLeft: 'auto' }}>
            <ViewHeadline />
          </IconButton>
        }
      </div>
      <Grid container direction={direction.direction} alignItems='center' spacing={3} className={classes.root}>
        <Grid item xs={direction.size}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image="https://image.businessinsider.com/5b71db4064dce81c008b4fa2?width=1100&format=jpeg&auto=webp"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
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
        <Grid item xs={direction.size}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image="https://image.businessinsider.com/5b71db4064dce81c008b4fa2?width=1100&format=jpeg&auto=webp"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
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
        <Grid item xs={direction.size}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image="https://image.businessinsider.com/5b71db4064dce81c008b4fa2?width=1100&format=jpeg&auto=webp"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
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
      </Grid>
    </div>
  );
}

export default App;
