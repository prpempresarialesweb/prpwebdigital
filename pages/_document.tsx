import Document, { Head, Html, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@mantine/next'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
	static getInitialProps = getInitialProps
	render() {
		return (
			<Html lang='es'>
				<Head>
					<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
					<link rel='manifest' href='/site.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#8c00ff' />
					<meta name='msapplication-TileColor' content='#ffffff' />
					<meta name='theme-color' content='#ffffff' />
					<link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' rel='stylesheet' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
