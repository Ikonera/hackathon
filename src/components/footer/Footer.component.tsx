import React, { FunctionComponent } from "react"
import { Typography, Grid } from "@material-ui/core"

const Footer: FunctionComponent = () => {
	return (
		<footer style={{ backgroundColor: "#333333" }}>
			<Grid container>
				<Grid item>
					<Typography>
						Copyright &copy; 2021 Fantine #JVJ
					</Typography>
				</Grid>
				<Grid item>
					<Typography>
						Mentions légales
					</Typography>
				</Grid>
			</Grid>
		</footer>
	)
}

export default Footer
