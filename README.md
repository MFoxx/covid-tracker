# Covid-19 Tracker Application

## Notes

This app is created from [tutorial by JavaScriptMastery](https://youtu.be/khJlrj3Y6Ls), that I refactored.

## My changes

I created Card component that is used for displaying numbers  
`Cards.jsx` return statmnent now looks like this:  

    <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <CardElement
                cases={confirmed}
                lastUpdate
                text={{ name: 'Infected', desc: 'Number of active cases of COVID-19' }}
            />
            <CardElement
                cases={recovered}
                lastUpdate
                text={{ name: 'Recovered', desc: 'Number of recovered from COVID-19' }}
            />
            <CardElement
                cases={deaths}
                lastUpdate
                text={{ name: 'Deaths', desc: 'Number of deaths caused by COVID-19' }}
            />
        </Grid>
    </div>

And there is new component Card.jsx that lookes like this:  

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

You also have to import it inside of `Cards.jsx`

## Setup

Inside of console:  `npm i && npm start`