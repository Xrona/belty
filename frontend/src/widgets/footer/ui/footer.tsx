import FooterItems from '@/entities/footer-items'
import { FC } from 'react'
import styles from './footer.module.scss'
import { footerInfo } from '../../../entities/footer-items/const/footerInfo'

export const Footer = () => {

	return <footer className={styles.container}>
		<div className={styles.content}>
			{footerInfo.map((e,idx) => <FooterItems {...e} key={idx}/>)}
		</div>
	</footer>
}
