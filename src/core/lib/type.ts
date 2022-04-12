import { ReactChild, ReactChildren, ReactNode, ReactPortal } from 'react'

export interface LayoutAppProps {
	children: ReactChild | ReactChildren | ReactPortal | ReactNode
}
