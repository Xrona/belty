import { spawn } from 'child_process'
import { link } from 'fs'
import { FC, PropsWithChildren } from 'react'
import { IFooterItem } from '../types/footerItem'

export const FooterItems: FC <IFooterItem> = ({title,children})=> {
	return <div>
		{title && <h3>{title}</h3>}
		<ul>
			{children.map((e,idx)=> <li key={idx}>
				{e.link ? <a href={e.link}>{e.name}</a> : <span>{e.name}</span>}
			</li>)}
		</ul>
	</div>
}
