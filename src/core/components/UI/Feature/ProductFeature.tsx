import { Chat24, Chat32 } from '@carbon/icons-react'
import { Grid, Text, ThemeIcon } from '@mantine/core'
import React from 'react'

export function ProductFeature({}) {
	return (
		<Grid>
			<Grid.Col lg={4} mt='xl'>
				<ThemeIcon variant='outline' sx={{ color: 'white', borderColor: 'white' }} size={62} radius={62}>
					<Chat32 />
				</ThemeIcon>
				<Text color='white' size='xl' weight={600} mt='xl'>
					Programa PRP Coaching
				</Text>
				<Text size='sm' color='dimmed' mt='sm' style={{ lineHeight: 1.6 }}>
					Enseño como atraer nuevos clientes de manera proactiva y a generar espacios online para tu negocio, empresa.
				</Text>
			</Grid.Col>

			<Grid.Col lg={4} mt='xl'>
				<ThemeIcon variant='outline' sx={{ color: 'white', borderColor: 'white' }} size={62} radius={62}>
					<Chat32 />
				</ThemeIcon>
				<Text color='white' size='xl' weight={600} mt='xl'>
					Programa PRP Coaching
				</Text>
				<Text size='sm' color='dimmed' mt='sm' style={{ lineHeight: 1.6 }}>
					Enseño como atraer nuevos clientes de manera proactiva y a generar espacios online para tu negocio, empresa.
				</Text>
			</Grid.Col>

			<Grid.Col lg={4} mt='xl'>
				<ThemeIcon variant='outline' sx={{ color: 'white', borderColor: 'white' }} size={62} radius={62}>
					<Chat32 />
				</ThemeIcon>
				<Text color='white' size='xl' weight={600} mt='xl'>
					Programa PRP Coaching
				</Text>
				<Text size='sm' color='dimmed' mt='sm' style={{ lineHeight: 1.6 }}>
					Enseño como atraer nuevos clientes de manera proactiva y a generar espacios online para tu negocio, empresa.
				</Text>
			</Grid.Col>
		</Grid>
	)
}
