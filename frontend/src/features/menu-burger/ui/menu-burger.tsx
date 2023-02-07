import {FC} from 'react'

import {useChangeStatus} from '@/features/menu-burger/hooks/useChangeStatus'

type TProps = {
	handler: () => void
}
export const MenuBurger: FC<TProps> = ({handler}) => {
	return (
		<button onClick={handler}>
			<span>test</span>
		</button>
	)
}
