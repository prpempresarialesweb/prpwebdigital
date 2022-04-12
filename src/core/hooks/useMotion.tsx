import { useIntersection } from '@mantine/hooks'
import { useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const useMotion = ({ key }: any) => {
	const [ref, observer] = useIntersection({
		root: key?.current,
		threshold: 0.1,
	})
	const initial = { opacity: 0, y: 30 }
	const transition = { delay: 0, duration: 0.3 }
	const animation = useAnimation()

	useEffect(() => {
		if (observer?.isIntersecting) {
			animation.start({
				opacity: 1,
				y: 0,
			})
		}
	}, [animation, observer?.isIntersecting])
	return { ref, initial, transition, animation }
}

export default useMotion
