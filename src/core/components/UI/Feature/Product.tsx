import { BackgroundImage, Box, Button, Container, createStyles, Grid, Space, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { Image } from 'react-datocms'
import useMotion from 'src/core/hooks/useMotion'
import { BannerChat } from '../Banner/BannerChat'
import { ProductFeature } from './ProductFeature'

const useStyles = createStyles((theme) => ({
	image: {
		borderRadius: theme.radius.lg,
	},
	wrapperImage: {
		//outline: '2px solid rgba(255, 255, 255, 0.25)',
		//outlineOffset: '-1px',
		borderRadius: theme.radius.lg,
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
		//background: 'linear-gradient(180deg, rgba(15, 0, 31, 0) 46.05%, rgba(15, 0, 31, 0.7) 100%)',
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

const Product = ({ data }: any) => {
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
				background: '#1C1524',
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
				<Container size='lg'>
					<Space h={80} />
					<Grid grow>
						<Grid.Col lg={12}>
							<motion.div ref={ref} initial={initial} transition={{ delay: 0.3, duration: 0.3 }} animate={animation}>
								<Title
									sx={(theme) => ({
										[theme.fn.largerThan('xs')]: {
											fontSize: 44,
											maxWidth: 500,
										},
										maxWidth: 350,
										fontWeight: 600,
										letterSpacing: -1.5,
										color: 'white',
										fontSize: 40,
										lineHeight: 1.1,
									})}
									order={2}>
									Programas online para el presente y <span style={{ color: '#C095EC' }}>Futuro.</span>
								</Title>
							</motion.div>
							<Space h={40} />
						</Grid.Col>
						{data.map((product: any) => (
							<Grid.Col key={product.id} sm={2} xs={6}>
								<motion.div ref={refcard} initial={initial} transition={{ delay: 0.4, duration: 0.3 }} animate={animation}>
									<Box sx={{ position: 'relative' }}>
										<Box target='_blank' href={product.gumroadProductLink} component='a'>
											{product.date ? (
												<Box className={classes.cardContent} p='md'>
													<Button
														size='xs'
														radius='xl'
														sx={(theme) => ({
															textTransform: 'uppercase',
															'&:hover': {
																backgroundColor: '#A3F4FF',
															},
															backgroundColor: '#A3F4FF',
															color: theme.colors.dark[9],
														})}>
														{product.date}
													</Button>
												</Box>
											) : (
												''
											)}
											<Box className={classes.wrapperImage}>
												{/*eslint-disable-next-line jsx-a11y/alt-text*/}
												<Image style={{ maxWidth: 600 }} className={classes.image} data={product.coverImage.responsiveImage} />
											</Box>
										</Box>
									</Box>
									<Space h='sm' />
									<Text size='md' color='white'>
										{product.title}
									</Text>
									<Text size='md' color='white'>
										${product.price} USD
									</Text>
								</motion.div>
							</Grid.Col>
						))}
						<Grid.Col sm={4} xs={6}>
							<BannerChat />
						</Grid.Col>
					</Grid>
					<Space h={70} />
					<ProductFeature />
					<Space h={80} />
				</Container>
			</BackgroundImage>
		</Box>
	)
}

export default Product
