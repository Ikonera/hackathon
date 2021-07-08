import React, { FunctionComponent } from "react"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const style = makeStyles({
	footer: { 
		backgroundColor: "#333333",
		position: "relative",
		bottom: '0',
		width: "100%",
		color: "white",
	},
	text: {
		margin: "5% 0"
	}
})

const Footer: FunctionComponent = () => {

	const classes = style()

	return (
		<Grid container justifyContent="space-around" alignItems="center" component="footer" className={ classes.footer }>
				<Grid item>
					<Typography className={ classes.text }>
						Copyright &copy; 2021 Fantine #JVJ
					</Typography>
				</Grid>
				<Grid item>
					<Typography className={classes.text}>
						Mentions légales
					</Typography>
				</Grid>
			</Grid>
	)
}

export default Footer
