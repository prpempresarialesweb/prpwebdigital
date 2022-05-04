import { ArrowDown20, ArrowRight16, ArrowRight20, Education20, LogoFacebook24, LogoInstagram24 } from '@carbon/icons-react'
import { Badge, Box, Button, Container, createStyles, Grid, Group, Space, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { Image } from 'react-datocms'
import useMotion from 'src/core/hooks/useMotion'

const useStyles = createStyles((theme) => ({
	grid: {},

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
			fontSize: 36,
			maxWidth: 500,
		},
		maxWidth: 350,
		fontWeight: 700,
		letterSpacing: -1.5,
		fontSize: 30,
		lineHeight: 1.1,
	},
	description: {
		[theme.fn.largerThan('xs')]: {
			fontSize: 18,
		},
		maxWidth: 600,
		lineHeight: 1.5,
		opacity: 0.65,
	},
}))

const Features = ({ data }: any) => {
	const sm = useMediaQuery('(min-width: 576px)')
	const { classes, cx } = useStyles()
	const motionHero = useRef()
	const { ref, initial, transition, animation } = useMotion(motionHero)

	return (
		<>
			{data.map((item: any) => (
				<Box key={item.id}>
					<Container size='lg'>
						<Space h={sm ? 130 : 60} />
						<Grid
							justify='space-between'
							align='center'
							gutter={0}
							sx={(theme) => ({
								flexDirection: item.reverseRow ? 'row-reverse' : 'row',
							})}>
							<Grid.Col xs={12} md={6}>
								<Group
									direction='column'
									spacing={'md'}
									sx={(theme) => ({
										[theme.fn.largerThan('xs')]: {
											maxWidth: 550,
										},
									})}>
									<Title className={classes.title} order={3}>
										{item.title}
									</Title>
									<Text size='md' weight={500} className={classes.description}>
										{item.description}
									</Text>
									{item.buttonLink ? (
										<Button
											rightIcon={<ArrowRight20 />}
											href={item.buttonLink}
											component='a'
											variant='subtle'
											color='primaryColor'
											sx={(theme) => ({
												':hover': {
													backgroundColor: 'transparent',
												},
												padding: 0,
												height: 'auto',
												fontSize: 18,
												fontWeight: 600,
											})}
											radius='lg'
											size='xl'>
											{item.buttonText}
										</Button>
									) : (
										''
									)}
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

								<Box
									className={classes.wrapperImage}
									sx={(theme) => ({
										textAlign: 'center',
									})}>
									<Box target='_blank' href={data.buttonLink} component='a'>
										{/*eslint-disable-next-line jsx-a11y/alt-text*/}
										<Image style={{ maxWidth: 900, margin: '0 auto' }} className={classes.image} data={item.image.responsiveImage} />
									</Box>
								</Box>
							</Grid.Col>
						</Grid>
					</Container>
				</Box>
			))}
		</>
	)
}

export default Features
