import { Avatar, BackgroundImage, Badge, Box, Button, Container, createStyles, Grid, Group, Space, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'
import { Image } from 'react-datocms'
import useMotion from 'src/core/hooks/useMotion'

declare global {
	interface Window {
		$chatwoot?: any
	}
}

const useStyles = createStyles((theme) => ({
	image: {
		borderRadius: theme.radius.md,
	},
	wrapperImage: {
		outline: '2px solid rgba(255, 255, 255, 0.25)',
		outlineOffset: '-1px',
		borderRadius: theme.radius.md,
	},
	badge: {
		fontSize: 16,
		fontWeight: 500,
		outline: '1px solid rgba(255, 255, 255, 0.25)',
		outlineOffset: '-1px',
		backgroundColor: 'rgba(255, 255, 255, 0.35)',
		color: 'white',
	},
	cardContent: {
		position: 'absolute',
		zIndex: 10,
		bottom: 0,
		background: 'linear-gradient(180deg, rgba(15, 0, 31, 0) 46.05%, rgba(15, 0, 31, 0.7) 100%)',
		width: '100%',
	},
	cardAvatar: {
		position: 'absolute',
		zIndex: 10,
		top: 0,
	},
	bgImage: {
		backgroundSize: 'contain',
	},
}))

const Feature = ({ data }: any) => {
	const motionFeature = useRef()
	const motionFeatureCard = useRef()
	const { ref, initial, transition, animation } = useMotion(motionFeature)
	const { ref: refcard } = useMotion(motionFeatureCard)
	const matches = useMediaQuery('(min-width: 992px)')
	const sm = useMediaQuery('(min-width: 576px)')
	const { classes, cx } = useStyles()
	return (
		<Box
			sx={(theme) => ({
				background: '#0F001F',
			})}>
			<BackgroundImage
				sx={(theme) => ({
					[theme.fn.largerThan('md')]: {
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					},
					backgroundSize: 'contain',
					backgroundPosition: 'top',
					backgroundRepeat: 'no-repeat',
				})}
				src={sm ? '/assets/circle.svg' : '/assets/circle-mobile.svg'}>
				<Container size={1000}>
					<Space h={60} />
					<Grid justify='center' align='center'>
						<Grid.Col lg={12}>
							<motion.div ref={ref} initial={initial} transition={{ delay: 0.3, duration: 0.3 }} animate={animation}>
								<Title
									align='center'
									sx={(theme) => ({
										[theme.fn.largerThan('md')]: {
											fontSize: 44,
										},
										fontWeight: 300,
										letterSpacing: -1.5,
										color: 'white',
										fontSize: 32,
										lineHeight: 1.1,
									})}
									order={2}>
									Clases online para el presente y <span style={{ color: '#C095EC' }}>Futuro.</span>
								</Title>
							</motion.div>
							<Space h={40} />
						</Grid.Col>
						{data.map((product: any) => (
							<Grid.Col key={product.id} sm={4} xs={6}>
								<motion.div ref={refcard} initial={initial} transition={{ delay: 0.4, duration: 0.3 }} animate={animation}>
									<Box sx={{ position: 'relative' }}>
										<Group p='md' spacing='sm' className={classes.cardAvatar}>
											<Avatar alt={product.author.name} radius='xl'>
												{/*eslint-disable-next-line jsx-a11y/alt-text*/}
												<Image data={product.author.picture.responsiveImage} />
											</Avatar>
											<div>
												<Text color='white' size='xs'>
													{product.author.name}
												</Text>
												<Text size='xs' color='white'>
													{product.author.profession}
												</Text>
											</div>
										</Group>
										<Box target='_blank' href={product.gumroadProductLink} component='a'>
											<Box className={classes.cardContent} p='md'>
												<Space h={200} />
												<Badge size='lg' className={classes.badge} variant='light'>
													{product.price}$
												</Badge>
												<Space h={4} />
												<Text size='md' color='white'>
													{product.title}
												</Text>
												<Space h={8} />
												<Button size='xs' variant='white' color='dark'>
													Inscribirme
												</Button>
											</Box>
											<Box className={classes.wrapperImage}>
												{/*eslint-disable-next-line jsx-a11y/alt-text*/}
												<Image style={{ maxWidth: 600 }} className={classes.image} data={product.coverImage.responsiveImage} />
											</Box>
										</Box>
									</Box>
								</motion.div>
							</Grid.Col>
						))}
					</Grid>
					<Space h={70} />
					<Group position='center' direction='column'>
						<Button
							onClick={() => window.$chatwoot.toggle('open')}
							variant='outline'
							sx={{
								color: 'white',
								borderColor: 'white',
								fontSize: 16,
								fontWeight: 500,
								minWidth: 160,
							}}
							radius='md'
							size='lg'>
							Planes para empresas
						</Button>
						<Text align='center' size='md' sx={(theme) => ({ maxWidth: 450, margin: '0 auto' })} color='dimmed'>
							Programas de clases y cursos online para empresas y equipos de alto rendimiento.
						</Text>
					</Group>
					<Space h={60} />
				</Container>
			</BackgroundImage>
		</Box>
	)
}

export default Feature
