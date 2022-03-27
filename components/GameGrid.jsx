import styles from '../styles/components/GameGrid.module.css';
import { Loading } from '@nextui-org/react';
import Game from './Game';
import { Grid } from '@nextui-org/react';

const GameGrid = ({ data, loading }) => {
	// DummyData
	// This data is going to be replaced with an axios.get request in 0.0.2

	return (
		<div className={styles.container}>
			<div className={styles.gameGrid}></div>
			{!loading ? (
				<Grid.Container gap={3} justify='center'>
					{data ? (
						data.map(element => (
							<Grid xs={4}>
								<Game key={element.id} game={element} />
							</Grid>
						))
					) : (
						<div>Type for search</div>
					)}
				</Grid.Container>
			) : (
				<div className={styles.loading}>
					<Loading size='lg' />
				</div>
			)}
		</div>
	);
};

export default GameGrid;
