import styles from '../styles/components/Searchbar.module.css';
import { Input } from '@nextui-org/react';

const SearchBar = ({ setSearchValue }) => {
	const handleChange = e => {
		setSearchValue(e.target.value);
	};

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
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
