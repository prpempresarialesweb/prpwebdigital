import React, { useRef } from 'react'
import { createStyles, Text, Avatar, Group, Box, Container, Space, Grid, Paper, Title, BackgroundImage, Spoiler } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import useMotion from 'src/core/hooks/useMotion'
import { motion } from 'framer-motion'
import { Image } from 'react-datocms'

const comments = [
	{
		postedAt: '10 minutes ago',
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.',
		author: {
			name: 'Jacob Warnhalters',
			image:
				'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
		},
	},
	{
		postedAt: '10 minutes ago',
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.',
		author: {
			name: 'Jacob Warnhalterq',
			image:
				'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
		},
	},
	{
		postedAt: '10 minutes ago',
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.',
		author: {
			name: 'Jacob Warnhalterrt',
			image:
				'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
		},
	},
	{
		postedAt: '10 minutes ago',
		body: 'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.',
		author: {
			name: 'Jacob Warnhalterbf',
			image:
				'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
		},
	},
]

const useStyles = createStyles((theme) => ({
	body: {
		//paddingLeft: 54,
		paddingTop: theme.spacing.sm,
	},
}))

interface CommentSimpleProps {
	postedAt: string
	body: string
	author: {
		name: string
		image: string
	}
}

const Comments = ({ data }: any) => {
	const motionComments = useRef()
	const motionComment = useRef()
	const { ref, initial, transition, animation } = useMotion(motionComments)
	const { ref: refComment } = useMotion(motionComment)
	const { classes } = useStyles()
	const sm = useMediaQuery('(min-width: 576px)')
	return (
		<Box
			sx={(theme) => ({
				background: 'linear-gradient(179.75deg, #FEFDFE 0.23%, #FCFAFE 99.79%)',
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
				src={sm ? '/assets/line.svg' : '/assets/line-mobile.svg'}>
				<Container size={1000}>
					<Space h={60} />
					<motion.div ref={ref} initial={initial} transition={transition} animate={animation}>
						<Title
							align='center'
							sx={(theme) => ({
								[theme.fn.largerThan('md')]: {
									fontSize: 44,
								},

								fontWeight: 300,
								letterSpacing: -1.5,
								color: theme.colors.brand[9],
								fontSize: 32,
								lineHeight: 1.1,
							})}
							order={3}>
							Lo que dicen los
							<Box
								ml={8}
								sx={{
									display: 'inline-block',
									textAlign: 'center',
									margin: '0 auto',
									//width: '20%',
									fontWeight: 500,
									background: 'linear-gradient(84.38deg, #FF8A00 -1.14%, #AD00FF 57.87%)',
									backgroundClip: 'text',
									textFillColor: 'transparent',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
								}}>
								expertos.
							</Box>
						</Title>
					</motion.div>
					<Space h={40} />
					<Grid justify='center'>
						{data.map((item: any) => (
							<Grid.Col xs={12} md={6} key={item.id}>
								<motion.div ref={refComment} initial={initial} transition={{ delay: 0.1, duration: 0.3 }} animate={animation}>
									<Paper radius='md' withBorder p='md'>
										<Group>
											<Avatar alt={item.author.name} radius='xl'>
												{/*eslint-disable-next-line jsx-a11y/alt-text*/}
												<Image data={item.author.picture.responsiveImage} />
											</Avatar>
											<div>
												<Text size='sm'>{item.author.name}</Text>
												<Text size='xs' color='dimmed'>
													{item.title}
												</Text>
											</div>
										</Group>
										<Spoiler maxHeight={100} showLabel='Leer más' hideLabel='Ocultar'>
											<Text className={classes.body} size='sm'>
												{item.comment}
											</Text>
										</Spoiler>
									</Paper>
								</motion.div>
							</Grid.Col>
						))}
					</Grid>
					<Space h={80} />
				</Container>
			</BackgroundImage>
		</Box>
	)
}
export default Comments
