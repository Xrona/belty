import * as React from 'react'
const SvgCartIcon = props => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g clipPath='url(#cartIcon_svg__a)'>
			<path
				d='M7.833 17c-.916 0-1.658.75-1.658 1.666 0 .917.742 1.667 1.659 1.667.916 0 1.666-.75 1.666-1.666C9.5 17.75 8.75 17 7.833 17Zm-5-13.334v1.667H4.5l3 6.325L6.375 13.7a1.612 1.612 0 0 0-.208.8c0 .916.75 1.666 1.667 1.666h10V14.5h-9.65a.206.206 0 0 1-.209-.209l.025-.1.75-1.358h6.209c.625 0 1.175-.341 1.458-.858L19.4 6.566a.836.836 0 0 0-.733-1.233H6.342l-.783-1.667H2.833ZM16.168 17c-.917 0-1.659.75-1.659 1.666 0 .917.742 1.667 1.659 1.667.916 0 1.666-.75 1.666-1.666 0-.917-.75-1.667-1.666-1.667Z'
				fill='#fff'
			/>
		</g>
		<defs>
			<clipPath id='cartIcon_svg__a'>
				<path
					fill='#fff'
					transform='translate(2 2)'
					d='M0 0h20v20H0z'
				/>
			</clipPath>
		</defs>
	</svg>
)
export default SvgCartIcon
