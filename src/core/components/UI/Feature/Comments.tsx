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
	title: {
		margin: '0 auto',
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
		<Box>
			<Container size='lg'>
				<Space h={sm ? 130 : 80} />
				<motion.div ref={ref} initial={initial} transition={transition} animate={animation}>
					<Title align='center' className={classes.title} order={3}>
						Lo que dicen los expertos
					</Title>
				</motion.div>
				<Space h={50} />
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
			</Container>
		</Box>
	)
}
export default Comments
