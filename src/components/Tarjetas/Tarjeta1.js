import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 240,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/2nZPyyv/Captura-de-Pantalla-2020-06-09-a-la-s-9-30-09-p-m.png"
          title="Contemplative Reptile"
          
        />
      </CardActionArea>

      <Card>
    <CardActionArea href="https://www.instagram.com/p/CBN6IVAgBbk/">
        <CardContent> 
        <Button size="larger" variant="contained" color="secondary" logo= "Instagram">
          Mostrar
        </Button>
        </CardContent>
    </CardActionArea>
      </Card>

    </Card>
    </Grid>
    
  );
}
