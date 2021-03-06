import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

const ThemeSelect = () => {
	const { setTheme } = useNextTheme();
	const { isDark, type } = useTheme();

	return (
		<div>
			The current theme is: {type}
			<Switch
				checked={isDark}
				onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
			/>
		</div>
	);
};

export default ThemeSelect;
