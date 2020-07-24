import React from 'react';
import { Grid } from '@material-ui/core';
import CardElement from './Card/Card';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return 'Loading...';
	}

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<CardElement
					cases={confirmed}
					lastUpdate={lastUpdate}
					text={{ name: 'Infected', desc: 'Number of active cases of COVID-19' }}
				/>
				<CardElement
					cases={recovered}
					lastUpdate={lastUpdate}
					text={{ name: 'Recovered', desc: 'Number of recovered from COVID-19' }}
				/>
				<CardElement
					cases={deaths}
					lastUpdate={lastUpdate}
					text={{ name: 'Deaths', desc: 'Number of deaths caused by COVID-19' }}
				/>
			</Grid>
		</div>
	);
};

export default Cards;
