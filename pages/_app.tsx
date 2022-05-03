import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App(props: AppPropsWithLayout) {
	const { Component, pageProps } = props
	const getLayout = Component.getLayout ?? ((page) => page)
	return (
		<>
			<Head>
				<title>PRP Empresariales</title>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
				<link rel='shortcut icon' href='/favicon.ico' />
			</Head>
			<Script strategy='afterInteractive' src='https://gumroad.com/js/gumroad.js' />
			<MantineProvider
				styles={{
					AppShell: {
						main: {
							paddingBottom: 0,
						},
					},
				}}
				withGlobalStyles
				withNormalizeCSS
				theme={{
					fontFamily: 'Poppins',
					headings: {
						fontFamily: 'Poppins',
					},

					colors: {
						brand: ['#FCF9FF', '#EDE0FA', '#DEC7F6', '#C095EC', '#A264E3', '#8432D9', '#6600D0', '#5200A6', '#3D007D', '#350072'],
					},
					primaryColor: 'brand',
					colorScheme: 'light',
				}}>
				<NotificationsProvider>{getLayout(<Component {...pageProps} />)}</NotificationsProvider>
			</MantineProvider>
		</>
	)
}
