import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tarjeta1 from './Tarjetas/Tarjeta1';
import Tarjeta2 from './Tarjetas/Tarjeta2';
import Tarjeta3 from './Tarjetas/Tarjeta3';
import Tarjeta4 from './Tarjetas/Tarjeta4';




export default function App() {
    return (

        <Grid container spacing={10}>
            <Grid item xs={6} sm= {8} md={5} >
                <Tarjeta1 />
            </Grid>
            <Grid item xs={6} sm= {8} md={5}  >
                <Tarjeta2 />
            </Grid>
            <Grid item xs={6} sm= {8} md={5}  >
                <Tarjeta3 />
            </Grid>
            <Grid item xs={6} sm= {8} md={5}  >
                <Tarjeta4 />
            </Grid>
            

        </Grid>
    )
}