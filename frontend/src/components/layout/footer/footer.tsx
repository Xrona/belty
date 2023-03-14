import {FC} from 'react'

import {footerInfo} from '@/app/const/footerInfo'

import FooterItems from './footer-items'
import styles from './footer.module.scss'

export const Footer: FC = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.content}>
				{footerInfo.map((e, idx) => (
					<FooterItems
						{...e}
						key={idx}
					/>
				))}
			</div>
		</footer>
	)
}
