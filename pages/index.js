import Head from 'next/head';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';
import styles from '../styles/Home.module.css';
import ThemeSelect from '../components/ThemeSelect';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ludere Lite</title>
				<meta name='description' content='Ludere Lite v0.0.1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Title />
				<SearchBar />
			</main>
		</div>
	);
}
