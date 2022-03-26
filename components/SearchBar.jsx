import styles from '../styles/components/Searchbar.module.css';
import { Input, Grid } from '@nextui-org/react';

const SearchBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<Input
					bordered
					labelPlaceholder='Buscar'
					color='primary'
					size='xl'
					className={styles.inputSearch}
					css={{ color: 'white' }}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
