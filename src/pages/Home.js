import React from "react"

// Material UI Imports
import Grid from "@material-ui/core/Grid"
import {makeStyles} from "@material-ui/core/styles"

// Component Imports
import ImageCard from "../components/ImageCard"

const useStyles = makeStyles((theme) => ({
	grid: {
		marginTop: "2vh"
	},
	roundImage: {
		borderRadius: "50%",
	},
}))

const Home = () => {
	const classes = useStyles()

	return (
		<Grid container spacing={1} className={classes.grid}>
			<Grid item xs={12} align="center">
				<img src={"https://pbs.twimg.com/profile_images/1112076519965425665/4GjtH4Ry_400x400.jpg"}
				     alt="Anthony Gregis infront of a red 'Be Next' Maingear backdrop" width="90px"
				     className={classes.roundImage}/>
				<h1>Anthony Gregis</h1>
				<h5>A Software Engineer propelled by solving complex situations.</h5>
			</Grid>
			<Grid item xs={12} align="center">
				<h1>Projects</h1>
			</Grid>
			<Grid item xs={12} align="center">
				<h3>Pre Codecamp</h3>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={3} align="center">
				<ImageCard
					name="[NoPixel] Chop List"
					description="A way for players ingame to look up certain vehicles. Designed to look rugged like a thrown together dark web site."
					image="/images/ChopList.png"
					site="/ChopList/index.php"
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={3} align="center">
				<ImageCard
					name="[NoPixel] DabCoin"
					description="A recreation of a cryptocurrency stock market, designed with random fluctuating prices, user wallets, public transaction records, and trading."
					image="/images/Dabcoin.png"
					site="/dabcoin/login.php"
					newTab="true"
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={3} align="center">
				<ImageCard
					name="[NoPixel] Payphone"
					description="Map of GTA5 with all the payphone locations, used by dark web characters in the server to find ways to make descreet phone calls."
					image="/images/payphone.png"
					site="/payphone/index.php"
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={3} align="center">
				<ImageCard
					name="[NoPixel] Kifflom"
					description="Recreates the kifflom website from GTAV. The contact us page displays a random phone number each time and can be used in the give money page to enter the dark web."
					image="/images/Kifflom.png"
					site="/kifflom/KIFFLOM.html"
				/>
			</Grid>
			<Grid item xs={12} align="center">
				<h3>During / Post Codecamp</h3>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={3} align="center">
				<ImageCard name="Project" description="A unique javascript project" image="https://pbs.twimg.com/profile_images/1112076519965425665/4GjtH4Ry_400x400.jpg" />
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={3} align="center">
				<ImageCard name="Project" description="A unique javascript project" image="https://pbs.twimg.com/profile_images/1112076519965425665/4GjtH4Ry_400x400.jpg" />
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={3} align="center">
				<ImageCard name="Project" description="A unique javascript project" image="https://pbs.twimg.com/profile_images/1112076519965425665/4GjtH4Ry_400x400.jpg" />
			</Grid>
		</Grid>
	)
}

export default Home