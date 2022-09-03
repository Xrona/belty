import { Button, Paper } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { Delete, Save } from '@mui/icons-material'

const Actions = () => {
	return (
		<Paper
			elevation={1}
			sx={{
				padding: '5px',
				position: 'sticky',
				top: '80px',
			}}
		>
			<Button>
				<EditIcon />
			</Button>
			<Button color='success'>
				<Save />
			</Button>
			<Button color='error'>
				<Delete />
			</Button>
		</Paper>
	)
}

export default Actions
