import React from "react"
import {Link} from "react-router-dom"

// Material UI Imports
import {makeStyles} from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		border: "1px solid white"
	},
	media: {
		height: 140,
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		maxWidth: "none",
	},
})

const Fade = React.forwardRef(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

Fade.propTypes = {
	children: PropTypes.element,
	in: PropTypes.bool.isRequired,
	onEnter: PropTypes.func,
	onExited: PropTypes.func,
};

export function SpringModal(props) {
	const classes = useStyles();

	return (
		<div>
				<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				className={classes.modal}
				open={props.open}
				onClose={props.handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
				timeout: 500,
			}}
				>
				<Fade in={props.open}>
				<iframe title={props.site} src={"https://anthonygregis.com/sites" + props.site} width="1000vh" height="500vh" />
				</Fade>
				</Modal>
		</div>
	);
}

const ImageCard = props => {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			{!props.newTab &&
			<>
				<SpringModal open={open} handleClose={handleClose} site={props.site}/>
				<Card className={classes.root} onClick={handleOpen}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image={props.image}
							title={props.name}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{props.name}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{props.description}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</>
			}
			{props.newTab == "true" &&
			<a href="https://anthonygregis.com/sites/dabcoin/login.php" target="_blank" style={{ textDecoration: 'none' }}>
				<Card className={classes.root} onClick={handleOpen}>
					<CardActionArea>
						<CardMedia
						className={classes.media}
						image={props.image}
						title={props.name}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{props.name}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{props.description}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</a>
			}
		</>
	)
}

export default ImageCard