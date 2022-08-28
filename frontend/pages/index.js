import { Button, Container, Grid } from '@mui/material'

export default function Home() {
	return (
		<div>
			<Container>
				<Grid container columns={12} spacing={1}>
					<Grid item xs={8}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Asperiores cumque ea et, facere harum impedit
							incidunt ipsa numquam odio praesentium.
						</p>
					</Grid>
					<Grid item xs={4}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Ab, optio.
						</p>
						<Button variant={'contained'} color='primary'>
							Press
						</Button>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}
