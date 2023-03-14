import FooterItems from '@/entities/footer-items'
import { FC } from 'react'
import styles from './footer.module.scss'
import { footerInfo } from '../../../entities/footer-items/const/footerInfo'

export const Footer = () => {

	return <div className={styles.footerContainer}>{footerInfo.map((e,idx) => <FooterItems {...e} key={idx}/>)}</div>
}
