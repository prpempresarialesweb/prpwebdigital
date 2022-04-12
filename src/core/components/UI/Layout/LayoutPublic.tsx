import { LogoFacebook24, LogoInstagram20, LogoInstagram24, LogoLinkedin24 } from '@carbon/icons-react'
import { ActionIcon, AppShell, Box, Burger, Button, Center, Container, createStyles, Footer, Group, Header, Text } from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { LayoutAppProps } from 'src/core/lib/type'
import Logo from '../Logo'
import ChatwootWidget from 'src/core/lib/ChatwootWidget'

const useStyles = createStyles((theme) => ({
	link: {
		minWidth: 100,
		fontWeight: 500,
		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},
}))

const Links = [
	//{ to: '/cursos', label: 'Cursos' },
	{ to: '/blog', label: 'Blog' },
	//{ to: '/#', label: 'item 3' },
]

const LayoutPublic = ({ children }: LayoutAppProps) => {
	const [opened, toggleOpened] = useBooleanToggle(false)
	const { classes, cx } = useStyles()

	return (
		<>
			{/*<ChatwootWidget />*/}
			<AppShell
				fixed
				padding={0}
				footer={
					<Footer
						height={80}
						sx={{
							borderTop: 0,
							position: 'initial',
						}}
						p='md'>
						<Container
							size={1000}
							sx={(theme: any) => ({
								[theme.fn.smallerThan('md')]: {
									padding: 0,
								},
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '100%',
							})}>
							<Link href='/' passHref>
								<Box component='a'>
									<Center>
										<Image width={90} objectFit='contain' layout='intrinsic' height={50} src='/assets/logo-footer.png' alt='logo Prp Empresariales' />
									</Center>
								</Box>
							</Link>
							<Group>
								<Text color='dimmed' weight={400} size='sm'>
									© 2022 PRP
								</Text>
								<Group>
									<Box target='_blank' component='a' href='https://www.instagram.com/prp_empresariales'>
										<ActionIcon size='lg' radius={100}>
											<LogoInstagram24 />
										</ActionIcon>
									</Box>
									<Box target='_blank' component='a' href='https://www.linkedin.com/company/prp-empresariales-c.a/'>
										<ActionIcon size='lg' radius={100}>
											<LogoLinkedin24 />
										</ActionIcon>
									</Box>
									<Box target='_blank' component='a' href='https://www.facebook.com/prpempresariales'>
										<ActionIcon size='lg' radius={100}>
											<LogoFacebook24 />
										</ActionIcon>
									</Box>
								</Group>
							</Group>
						</Container>
					</Footer>
				}
				header={
					<Header
						height={60}
						sx={(theme: any) => ({
							//background: '#E2EEF3',
							//border: 'none',
							paddingRight: theme.spacing.md,
							paddingLeft: theme.spacing.md,
						})}>
						<Container
							size={1000}
							sx={(theme: any) => ({
								[theme.fn.smallerThan('md')]: {
									padding: 0,
								},
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '100%',
							})}>
							<Link href='/' passHref>
								<Box component='a'>
									<Center>
										<Image width={58} objectFit='contain' layout='intrinsic' height={28} src='/assets/logo.png' alt='logo Prp Empresariales' />
									</Center>
								</Box>
							</Link>
							{/*<Burger
								opened={opened}
								onClick={() => toggleOpened()}
								sx={(theme) => ({
									[theme.fn.largerThan('xs')]: {
										display: 'none',
									},
								})}
								size='md'
							/>*/}
							{/*
							<Group
								spacing={59}
								position='right'
								sx={(theme) => ({
									[theme.fn.smallerThan('xs')]: {
										//display: 'none',
									},
								})}>
								{Links.map((item) => (
									<Link key={item.label} href={item.to} passHref>
										<Button className={classes.link} component='a' variant='light' color='' radius='md'>
											{item.label}
										</Button>
									</Link>
								))}*/}
							{/*
								<Button radius='md' color='dark' variant='outline' size='sm'>
									Iniciar Sesion
								</Button>*/}
							{/*</Group>*/}
							{/*<Box
								sx={(theme) => ({
									[theme.fn.largerThan('xs')]: {
										display: 'none',
									},
								})}>
								<Button radius='md' color='dark' variant='outline' size='sm'>
									Iniciar Sesion
								</Button>
							</Box>*/}
						</Container>
					</Header>
				}>
				{children}
			</AppShell>
		</>
	)
}

export default LayoutPublic
