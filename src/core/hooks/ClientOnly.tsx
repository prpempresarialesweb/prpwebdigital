import { Fragment, ReactChild, ReactChildren, ReactNode, ReactPortal, useEffect, useState } from 'react'

interface ClientsProps {
	children: ReactChild | ReactChildren | ReactPortal | ReactNode
}

export default function ClientOnly({ children, ...delegated }: ClientsProps) {
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	if (!hasMounted) {
		return null
	}

	return <Fragment {...delegated}>{children}</Fragment>
}
