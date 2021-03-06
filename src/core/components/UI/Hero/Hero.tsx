import { Education20, LogoFacebook24, LogoInstagram24, Purchase24 } from '@carbon/icons-react'
import { Badge, Box, Button, Container, createStyles, Grid, Group, Space, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { Image } from 'react-datocms'
import useMotion from 'src/core/hooks/useMotion'
import PaypalIcon from 'src/core/components/UI/Icons/PaypalIcon'
import MasterCardIcon from '../Icons/MasterCardIcon'
import VisaIcon from '../Icons/VisaIcon'

const useStyles = createStyles((theme) => ({
	image: {
		//mixBlendMode: 'screen',
		borderRadius: theme.radius.md,
	},
	wrapperImage: {
		borderRadius: theme.radius.md,
	},
	title: {
		color: '#25014B',
		[theme.fn.largerThan('xs')]: {
			fontSize: 60,
			letterSpacing: -3,
		},
		fontSize: 52,
		letterSpacing: -0.7,
		lineHeight: 1,
		fontWeight: 800,
	},
	description: {
		[theme.fn.largerThan('xs')]: {
			fontSize: 24,
		},
		lineHeight: 1.5,
		opacity: 0.65,
	},
}))

const Hero = ({ data }: any) => {
	const sm = useMediaQuery('(min-width: 576px)')
	const { classes, cx } = useStyles()
	const motionHero = useRef()
	const { ref, initial, transition, animation } = useMotion(motionHero)

	return (
		<Box style={{ backgroundColor: '#FBF7ED' }}>
			<Container size='lg'>
				<Space h={100} />
				<Grid justify='center' align='center' gutter={0}>
					<Grid.Col xs={12} md={7}>
						<Group
							direction='column'
							spacing={sm ? 32 : 'md'}
							sx={(theme) => ({
								[theme.fn.largerThan('xs')]: {
									maxWidth: 550,
								},
							})}>
							{data.badge ? (
								<Badge variant='dot' color='primaryColor'>
									{data.badge}
								</Badge>
							) : (
								''
							)}
							<Title className={classes.title} order={1}>
								{data.title}
							</Title>
							<Text size='lg' weight={500} className={classes.description}>
								{data.description}
							</Text>
							<Button
								data-gumroad-single-product='true'
								fullWidth={!sm ? true : false}
								leftIcon={<Education20 />}
								href={data.buttonLink}
								component='a'
								color='primaryColor'
								sx={(theme) => ({
									height: 55,
									fontSize: 18,
									fontWeight: 600,
									minWidth: 200,
								})}
								radius='lg'
								size='xl'>
								{data.buttonText}
							</Button>
							<Box>
								<Group
									mt='md'
									mb='md'
									sx={(theme) => ({
										opacity: 0.8,
										color: theme.colors.dark[9],
									})}>
									<Text size='sm' style={{ color: 'inherit' }} weight={500}>
										Medios de Pago
									</Text>
									<PaypalIcon />
									<VisaIcon />
									<MasterCardIcon />
									<Purchase24 />
								</Group>
								{data.information ? (
									<Text size='xs' weight={500} sx={{ maxWidth: 400 }}>
										{data.information}
									</Text>
								) : (
									''
								)}
							</Box>
						</Group>
					</Grid.Col>
					<Grid.Col md={5} xs={12}>
						<Space
							h={60}
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
								})}>
								{/*eslint-disable-next-line jsx-a11y/alt-text*/}
								<Image style={{ maxWidth: 900, margin: '0 auto' }} className={classes.image} data={data.image.responsiveImage} />
							</Box>
						</motion.div>
					</Grid.Col>
				</Grid>

				<Space h={sm ? 100 : 60} />
				{/*<LogoCloud />*/}
				{/*<Space h={30} />*/}
			</Container>
		</Box>
	)
}

export default Hero
