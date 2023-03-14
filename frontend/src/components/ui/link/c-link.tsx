import Link from 'next/link'
import {FC, useState} from 'react'

export interface ICLink {
	name: string
	href: string
}

export const CLink: FC<ICLink> = ({name, href}) => {
	return <Link href={href}>{name}</Link>
}
