import { Chat24, Chat32 } from '@carbon/icons-react'
import { Box, Grid, Text, ThemeIcon } from '@mantine/core'
import React from 'react'
import { Image } from 'react-datocms'

export function ProductFeature({ data }: any) {
	return (
		<Grid gutter={'xl'}>
			{data.map((item: any) => (
				<Grid.Col key={item.id} lg={4} mt={30}>
					<Box>
						{/*eslint-disable-next-line jsx-a11y/alt-text*/}
						<Image data={item.icon.responsiveImage} />
					</Box>
					{/*<ThemeIcon variant='outline' sx={{ color: 'white', borderColor: 'white' }} size={62} radius={62}>
						<Chat32 />
					</ThemeIcon>*/}
					<Text color='white' size='xl' weight={600} mt='xl'>
						{item.title}
					</Text>
					<Text size='sm' color='dimmed' mt='sm' style={{ lineHeight: 1.6 }}>
						{item.description}
					</Text>
				</Grid.Col>
			))}
		</Grid>
	)
}
