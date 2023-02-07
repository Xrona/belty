import {useState} from 'react'

export const useChangeStatus = () => {
	const [isActive, setIsActive] = useState(false)

	return {
		status: isActive,
		changeStatusHandler: () => setIsActive(!isActive),
	}
}
