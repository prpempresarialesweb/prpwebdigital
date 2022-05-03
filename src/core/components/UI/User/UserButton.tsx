import React from 'react'
import { UnstyledButton, UnstyledButtonProps, Group, Avatar, Text, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
	user: {
		display: 'block',
		borderRadius: theme.radius.sm,
		width: '100%',
		padding: '16px 8px',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

		'&:hover': {
			//backgroundColor: theme.colors.dark[5],
		},
	},
}))

export function UserButton({ image, name, email, ...others }: any) {
	const { classes } = useStyles()

	return (
		<UnstyledButton className={classes.user} {...others}>
			<Group>
				<Avatar src={image} radius='xl' />

				<div style={{ flex: 1 }}>
					<Text size='sm' weight={500}>
						{name}
					</Text>

					<Text color='dimmed' size='xs'>
						{email}
					</Text>
				</div>
			</Group>
		</UnstyledButton>
	)
}
