import styles from '../styles/components/GameGrid.module.css';

import Game from './Game';
import { Grid } from '@nextui-org/react';

const GameGrid = ({ data }) => {
	// DummyData
	// This data is going to be replaced with an axios.get request in 0.0.2

	return (
		<div className={styles.container}>
			<div className={styles.gameGrid}>GameGrid</div>
			<Grid.Container gap={3} justify='center'>
				{data ? (
					data.map(element => (
						<Grid xs={4}>
							<Game key={element.id} game={element} />
						</Grid>
					))
				) : (
					<div>No results</div>
				)}
			</Grid.Container>
		</div>
	);
};

export default GameGrid;
