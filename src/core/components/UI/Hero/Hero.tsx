import { Badge, Box, Button, Container, createStyles, Grid, Group, Space, Text, Title } from '@mantine/core'
import { useIntersection, useMediaQuery } from '@mantine/hooks'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { Image } from 'react-datocms'
import useMotion from 'src/core/hooks/useMotion'
import LogoCloud from '../LogoCloud/LogoCloud'

const useStyles = createStyles((theme) => ({
	image: {
		borderRadius: theme.radius.md,
	},
	wrapperImage: {
		outline: '2px solid rgba(255, 255, 255, 0.25)',
		outlineOffset: '-1px',
		borderRadius: theme.radius.md,
	},
}))

const Hero = ({ data }: any) => {
	const sm = useMediaQuery('(min-width: 992px)')
	const { classes, cx } = useStyles()
	const motionHero = useRef()
	const { ref, initial, transition, animation } = useMotion(motionHero)

	return (
		<motion.div
			transition={{
				duration: 2,
				repeat: Infinity,
				repeatType: 'reverse',
				delay: 0.5,
			}}
			animate={{
				background: ['linear-gradient(179.75deg, #FFFFFF 0.23%, #F7F2FD 99.79%)', 'linear-gradient(179.75deg, #F9FEFF 0.23%, #FFE8F8 99.79%)'],
			}}>
			<Container size={1000}>
				<Space h={60} />
				<Grid justify='center' align='center' gutter={0}>
					<Grid.Col xs={12} md={6}>
						{/*<motion.div ref={ref} initial={initial} transition={transition} animate={animation}>*/}
						<Group
							position={sm ? 'left' : 'center'}
							direction='column'
							spacing='xl'
							sx={(theme) => ({
								maxWidth: 520,
								margin: '0 auto',
								[theme.fn.largerThan('md')]: {
									maxWidth: 420,
									margin: '0',
								},
							})}>
							<Badge variant='dot' color='violet'>
								05 DE MAYO - PRP Coaching
							</Badge>
							<Title
								align={sm ? 'left' : 'center'}
								sx={(theme) => ({
									[theme.fn.largerThan('md')]: {
										fontSize: 63,
										lineHeight: '62px',
										letterSpacing: '-4px',
									},
									fontWeight: 600,
									letterSpacing: '-3px',
									color: theme.colors.brand[9],
									fontSize: 50,
									lineHeight: '49px',
								})}
								order={1}>
								{data.title}
								{/*Construye <Box sx={(theme) => ({ color: theme.colors.brand[6], display: 'inline-flex' })}>empresas</Box> saludables.*/}
							</Title>
							<Text
								align={sm ? 'left' : 'center'}
								size='lg'
								sx={(theme) => ({
									[theme.fn.largerThan('md')]: {
										fontSize: 20,
										//lineHeight: '25px',
									},
									color: theme.colors.brand[9],
									opacity: 0.75,
									lineHeight: '24px',
								})}>
								{data.description}
							</Text>

							<Button
								target='_blank'
								href={data.buttonLink}
								component='a'
								color='primary'
								sx={{
									fontSize: 16,
									fontWeight: 500,
									minWidth: 160,
								}}
								radius='md'
								size='lg'>
								{data.buttonText}
							</Button>
						</Group>
						{/*</motion.div>*/}
					</Grid.Col>
					<Grid.Col md={6} xs={12}>
						<Space
							h={30}
							sx={(theme) => ({
								[theme.fn.largerThan('md')]: {
									display: 'none',
								},
							})}
						/>
						<motion.div ref={ref} initial={initial} transition={{ delay: 0.1, duration: 0.3 }} animate={animation}>
							<Box
								className={classes.wrapperImage}
								sx={(theme) => ({
									textAlign: 'center',
									//maxWidth: 48,
									//margin: '0 auto',
									//[theme.fn.largerThan('md')]: {
									//	marginRight: 0,
									//},
								})}>
								<Box target='_blank' href={data.buttonLink} component='a'>
									{/*eslint-disable-next-line jsx-a11y/alt-text*/}
									<Image style={{ maxWidth: 736 }} className={classes.image} data={data.image.responsiveImage} />
								</Box>
								{/*<Image
									className={classes.image}
									alt='Mountains'
									src='/assets/hero.png'
									layout='intrinsic'
									width={484}
									objectFit='contain'
									height={570}
								/>*/}
							</Box>
						</motion.div>
					</Grid.Col>
				</Grid>

				<Space h={30} />
				<LogoCloud />
				<Space h={30} />
			</Container>
		</motion.div>
	)
}

export default Hero
