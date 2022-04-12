import { Blog24, Logout20, Notification20, Purchase20, UserAvatar20, UserAvatar24, VideoChat24, VideoFilled24 } from '@carbon/icons-react'
import { ActionIcon, Avatar, Container, Group, Menu, Skeleton } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Logo from '../Logo'

const Navigation = () => {
	const router = useRouter()

	return (
		<Container
			size='xl'
			sx={() => ({
				height: '100%',
			})}>
			<Group style={{ height: '100%' }} position='apart'>
				<Logo width='24' height='24' color='black' />
				<Group
					spacing='xl'
					sx={() => ({
						'@media (min-width: 992px)': {
							display: 'flex',
						},
						display: 'contents',
					})}>
					<Link passHref href='#'>
						<ActionIcon component='a' size='lg' radius='xl'>
							<VideoChat24 />
						</ActionIcon>
					</Link>
					<Link passHref href='#'>
						<ActionIcon component='a' size='lg' radius='xl'>
							<Blog24 />
						</ActionIcon>
					</Link>
					{/*{isLoading ? (
						<>
							<Skeleton height={26} circle />
							<Skeleton height={26} circle />
						</>
					) : (
						<>
							{user ? (
								<>
									<Link passHref href='/notificaciones'>
										<ActionIcon component='a' size='lg' radius='xl'>
											<Notification20 />
										</ActionIcon>
									</Link>
									<Menu
										withArrow
										placement='end'
										control={
											<ActionIcon>
												<Avatar
													radius='xl'
													size='sm'
													src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
												/>
											</ActionIcon>
										}>
										<Menu.Label>Cuenta Gratis</Menu.Label>
										<Menu.Item onClick={() => router.push('/')} icon={<UserAvatar20 />}>
											Perfil
										</Menu.Item>
										<Menu.Item onClick={() => router.push('/')} icon={<Purchase20 />}>
											Suscripcion
										</Menu.Item>
										<Menu.Item onClick={() => logout()} icon={<Logout20 />}>
											Cerrar Session
										</Menu.Item>
									</Menu>
								</>
							) : (
								<ActionIcon variant='hover' color='primary' size='lg' radius='xl' onClick={() => login()}>
									<UserAvatar24 />
								</ActionIcon>
							)}
						</>
					)}*/}
				</Group>
			</Group>
		</Container>
	)
}

export default Navigation
