import styles from '../styles/components/Title.module.css';

const Title = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Ludere-lite</h1>
			<h2 className={styles.version}>version 0.0.1</h2>
		</div>
	);
};

export default Title;
