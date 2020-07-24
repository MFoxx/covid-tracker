import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './../Cards.module.css';


function CardElement ({cases: {value}, lastUpdate, text: {name, desc}}) {

    return (
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles[name.toLowerCase()])}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {name}
                </Typography>
                <Typography varaint="h5">
                    <CountUp start={0} end={value} duration={2} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">{desc}</Typography>
            </CardContent>
	</Grid>
    )
}

export default CardElement;