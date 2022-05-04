import { Chat20 } from '@carbon/icons-react'
import { AspectRatio, Box, Button, createStyles, Group, Space, Text } from '@mantine/core'
import React from 'react'

declare global {
	interface Window {
		$chatwoot?: any
	}
}

const useStyles = createStyles((theme) => ({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing.xl * 2,
		borderRadius: theme.radius.md,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
		border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]}`,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			flexDirection: 'column-reverse',
			padding: theme.spacing.xl,
		},
	},

	body: {
		paddingRight: theme.spacing.xl * 4,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			paddingRight: 0,
			marginTop: theme.spacing.xl,
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
		marginBottom: theme.spacing.md,
	},

	controls: {
		display: 'flex',
		marginTop: theme.spacing.xl,
	},

	inputWrapper: {
		width: '100%',
		flex: '1',
	},

	input: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderRight: 0,
	},

	control: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
}))

export function BannerChat() {
	const { classes } = useStyles()
	return (
		<AspectRatio ratio={1 / 1} mx='auto'>
			<Box
				p='xl'
				sx={(theme) => ({
					backgroundColor: '#3F3947',
					borderRadius: theme.radius.lg,
					alignItems: 'end !important',
				})}>
				<Group spacing='sm'>
					<Group direction='column' spacing='xs'>
						<Text color='white' size='md'>
							1. Pagos de Inscripción en moneda nacional (Venezuela)
						</Text>
						<Text color='white' size='md'>
							2. Preguntas frecuentes
						</Text>
						<Text color='white' size='md'>
							3. Consulta sobre próximas fechas
						</Text>
					</Group>
					<Text color='white' size='xs'>
						Respondemos todas tus dudas a través de nuestro chat en tiempo real, en todas las plataformas digitales.
					</Text>
					<Space h='md' />
					<Button
						onClick={() => window.$chatwoot.toggle('open')}
						fullWidth
						leftIcon={<Chat20 />}
						sx={(theme) => ({
							':hover': {
								backgroundColor: theme.colors.brand[6],
							},
							backgroundColor: '#5D5667',

							height: 55,
							fontSize: 18,
							fontWeight: 600,
							minWidth: 200,
						})}
						radius='lg'
						size='xl'>
						Chat
					</Button>
				</Group>
			</Box>
		</AspectRatio>
	)
}
