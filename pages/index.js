import Head from 'next/head';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';
import styles from '../styles/Home.module.css';
import ThemeSelect from '../components/ThemeSelect';
import GameGrid from '../components/GameGrid';
import { useState, useEffect } from 'react';

// Data Import
import { data } from '../data/demoData';

export default function Home() {
	const [searchValue, setSearchValue] = useState();
	const [dataResult, setDataResult] = useState();

	useEffect(() => {
		if (!searchValue) {
			setDataResult(null);
		} else {
			setDataResult(data.filter(game => game.gameTitle.includes(searchValue)));
		}
	}, [searchValue]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Ludere Lite</title>
				<meta name='description' content='Ludere Lite v0.0.1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Title />
				<SearchBar setSearchValue={setSearchValue} />
				<GameGrid data={dataResult} />
			</main>
		</div>
	);
}
