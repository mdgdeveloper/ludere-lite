import styles from '../styles/components/Game.module.css';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';

const Game = ({ game }) => {
	const platformCSS = {
		PS5: styles.ps5,
		PS4: styles.ps4,
		XBOX: styles.xbox,
		PC: styles.PC,
		Switch: styles.switch,
	};

	const RatingComponent = () => {
		return (
			<div className={styles.ratingValue}>
				{game.rating}
				{Array(game.rating).map(() => (
					<StarIcon />
				))}
			</div>
		);
	};

	return (
		<div className={styles.container}>
			<div className={styles.game}>
				<div className={styles.left}>
					<Image
						src={game.gameCover}
						width={100}
						height={135}
						className={styles.gameCover}
					/>
				</div>
				<div className={styles.right}>
					<div className={styles.title}>{game.gameTitle}</div>
					<div className={styles.platformList}>
						{game.platform.map(platform => (
							<div
								key={platform}
								className={`${styles.platform} ${platformCSS[platform]} `}
							>
								{platform}
							</div>
						))}
					</div>
					<div className={styles.rating}>
						<StarIcon fontSize='small' className={styles.star} />
						<div className={styles.ratingValue}>{game.rating}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Game;
