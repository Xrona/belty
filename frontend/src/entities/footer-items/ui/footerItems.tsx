import clsx from 'clsx'
import { FC } from 'react'
import { IFooterItem } from '../types/footerItem'
import styles from './footerItems.module.scss'
import {CLink} from '@/shared/ui/link'

export const FooterItems: FC <IFooterItem> = ({title,children})=> {
	return <div>
		{title && <h3>{title}</h3>}
		<ul className={styles.ul}>
			{children.map((e,idx)=> <li key={idx} className={clsx(styles.li, styles[e.view])} >
				{e.link ? <CLink href={e.link} name={e.name}/> : <span>{e.name}</span>}
			</li>)}
		</ul>
	</div>
}
