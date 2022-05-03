import { Box, Container, Grid, Group, Space, Text } from '@mantine/core'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import useMotion from 'src/core/hooks/useMotion'

const LogoCloud = () => {
	const motionLogoCloud = useRef()
	const { ref, initial, animation } = useMotion(motionLogoCloud)
	return (
		<Box style={{ backgroundColor: '#FFFCF3' }} py='lg'>
			<Container size='lg'>
				<motion.div ref={ref} initial={initial} transition={{ delay: 0.2, duration: 0.3 }} animate={animation}>
					<Group position='apart'>
						<Image src='/assets/logo03.png' layout='intrinsic' objectFit='contain' width='90px' height='25px' alt='logo' />
						<Image src='/assets/logo01.png' layout='intrinsic' objectFit='contain' width='90px' height='25px' alt='logo' />
						<Image src='/assets/logo02.png' layout='intrinsic' objectFit='contain' width='90px' height='25px' alt='logo' />
						<Image src='/assets/logo05.png' layout='intrinsic' objectFit='contain' width='90px' height='25px' alt='logo' />
						<Image src='/assets/logo06.png' layout='intrinsic' objectFit='contain' width='90px' height='25px' alt='logo' />
						<Image src='/assets/logo04.png' layout='intrinsic' objectFit='contain' width='90px' height='25px' alt='logo' />
					</Group>
				</motion.div>
			</Container>
		</Box>
	)
}

export default LogoCloud
