import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
	const darkTheme = createTheme({
		type: 'dark',
	});
	const lightTheme = createTheme({
		type: 'light',
	});

	return (
		<NextUIProvider theme={darkTheme}>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
