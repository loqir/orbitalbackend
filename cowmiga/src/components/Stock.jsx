import React, { Component } from 'react';
import StockOverview from './StockOverview';
import Charts from './Charts';
import Grid from '@material-ui/core/Grid';

const Stock = (props) => {
    const abc = props.ticker

    return (
        <Grid item container md={12} justify="center">
            <Grid container item justify="center">
                <StockOverview companyName={abc} />
            </Grid>
            <Grid
                container
                item
                justify="center"
                style={{ marginTop: '2em  ' }}
            >
                <Charts companyName={abc} />
            </Grid>
        </Grid>
    );
}

export default Stock;