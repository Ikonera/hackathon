import React, { FunctionComponent } from "react"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const style = makeStyles({
	footer: { 
		backgroundColor: "#333333",
		position: "relative",
		bottom: '0',
		width: "100%",
		color: "white"
	}
})

const Footer: FunctionComponent = () => {

	const classes = style()

	return (
		<Grid container justifyContent="space-around" component="footer" className={ classes.footer }>
				<Grid item alignContent="center">
					<Typography>
						Copyright &copy; 2021 Fantine #JVJ
					</Typography>
				</Grid>
				<Grid item alignContent="center">
					<Typography>
						Mentions légales
					</Typography>
				</Grid>
			</Grid>
	)
}

export default Footer
