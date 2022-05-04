import { Blog24, LogoFacebook24, LogoInstagram20, LogoInstagram24, LogoLinkedin24, StarReview24, Video24 } from '@carbon/icons-react'
import {
	ActionIcon,
	AppShell,
	Box,
	Burger,
	Button,
	Center,
	Container,
	createStyles,
	Drawer,
	Footer,
	Group,
	Header,
	Navbar,
	Text,
} from '@mantine/core'
import { useBooleanToggle, useIntersection } from '@mantine/hooks'
import Link from 'next/link'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { LayoutAppProps } from 'src/core/lib/type'
import Logo from '../Logo'
import ChatwootWidget from 'src/core/lib/ChatwootWidget'
import { UserButton } from '../User/UserButton'

const useStyles = createStyles((theme) => ({
	link: {
		minWidth: 100,
		fontWeight: 500,
		//color: 'white',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	drawerLink: {
		marginBottom: theme.spacing.sm,
		paddingRight: 0,
		paddingLeft: 8,
		fontWeight: 500,
		//color: 'white',
		'&:hover': {
			//backgroundColor: theme.colors.dark[5],
		},
	},
}))

const Links = [
	{ to: '#', label: 'Blog', icon: <Blog24 /> },
	//{ to: '#', label: 'Cursos', icon: <Video24 /> },
	//{ to: '#', label: 'Casos de Exito', icon: <StarReview24 /> },
]

const LayoutPublic = ({ children }: LayoutAppProps) => {
	const containerRef = useRef()
	const { classes, cx } = useStyles()
	const [opened, setOpened] = useState(false)
	const [ref, observer] = useIntersection({
		root: containerRef.current,
		threshold: 0.9,
	})

	return (
		<>
			<ChatwootWidget />
			<AppShell
				ref={ref}
				fixed
				padding={0}
				footer={
					<Footer
						height={80}
						sx={{
							position: 'initial',
						}}
						mt={130}
						p='md'>
						<Container
							size='lg'
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
							transition: 'all 0.2s ease',
							backgroundColor: observer?.isIntersecting ? '#FBF7ED' : 'rgb(251 247 237 / 80%)',
							backdropFilter: observer?.isIntersecting ? 'none' : 'blur(5px)',
							//border: 'none',
							paddingRight: theme.spacing.md,
							paddingLeft: theme.spacing.md,
						})}>
						<Container
							size='lg'
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
										{/*<Logo color='white' width='56' height={20} />*/}
									</Center>
								</Box>
							</Link>
							<Group
								sx={(theme) => ({
									[theme.fn.largerThan('xs')]: {
										display: 'none',
									},
								})}>
								<Box target='_blank' component='a' href='https://www.instagram.com/prp_empresariales'>
									<ActionIcon variant='transparent' size='lg' radius={100}>
										<LogoInstagram24 />
									</ActionIcon>
								</Box>

								<Box target='_blank' component='a' href='https://www.linkedin.com/company/prp-empresariales-c.a/'>
									<ActionIcon variant='transparent' size='lg' radius={100}>
										<LogoLinkedin24 />
									</ActionIcon>
								</Box>
								<Box target='_blank' component='a' href='https://www.facebook.com/prpempresariales'>
									<ActionIcon size='lg' radius={100}>
										<LogoFacebook24 />
									</ActionIcon>
								</Box>
								<Burger opened={opened} onClick={() => setOpened(true)} size='sm' />
							</Group>

							<Group
								spacing='md'
								position='right'
								sx={(theme) => ({
									[theme.fn.smallerThan('xs')]: {
										display: 'none',
									},
								})}>
								{Links.map((item) => (
									<Link key={item.label} href={item.to} passHref>
										<Button className={classes.link} component='a' color='dark' variant='subtle' size='md'>
											{item.label}
										</Button>
									</Link>
								))}
								<Group>
									<Box target='_blank' component='a' href='https://www.instagram.com/prp_empresariales'>
										<ActionIcon variant='transparent' size='lg' radius={100}>
											<LogoInstagram24 />
										</ActionIcon>
									</Box>

									<Box target='_blank' component='a' href='https://www.linkedin.com/company/prp-empresariales-c.a/'>
										<ActionIcon variant='transparent' size='lg' radius={100}>
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
					</Header>
				}>
				<Drawer
					opened={opened}
					onClose={() => setOpened(false)}
					title={
						<Link href='/' passHref>
							<Box component='a'>
								<Center>
									<Image width={58} objectFit='contain' layout='intrinsic' height={28} src='/assets/logo.png' alt='logo Prp Empresariales' />
									{/*<Logo color='white' width='56' height={20} />*/}
								</Center>
							</Box>
						</Link>
					}
					padding={20}
					size='xl'>
					<Navbar p='sm'>
						<Navbar.Section grow mt='md'>
							{Links.map((item) => (
								<Link key={item.label} href={item.to} passHref>
									<Button
										styles={{
											inner: {
												justifyContent: 'left',
											},
										}}
										leftIcon={item.icon}
										className={classes.drawerLink}
										component='a'
										fullWidth
										variant='subtle'
										size='md'>
										{item.label}
									</Button>
								</Link>
							))}
						</Navbar.Section>
					</Navbar>
				</Drawer>
				{children}
			</AppShell>
		</>
	)
}

export default LayoutPublic
