import { View, Text, Button, Image, StyleSheet, Dimensions } from 'react-native';
import { colors } from './Colors';
import { ScreenWidth, ScreenHeight } from './Dimensions';


function EventCards() {
	
	// Variables
	let eventName = "Spy Family watch party";
	let organizerName = "Mihir Sahu";
	let eventLocation = "Virtual: CougarCS Discord server";

	return (
		<View style={styles.card}>
			<View style={styles.textSection}>
				<Text style={styles.cardText}>{eventName}</Text>
				<Text style={styles.cardText}>{organizerName}</Text>
				<Text style={styles.cardText}>{eventLocation}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.white,
		width: ScreenWidth * .9,
		height: ScreenHeight * .25,
		borderRadius: ScreenWidth * .06,
		borderWidth: ScreenWidth * .005,
	},
	textSection: {
		alignItems: 'flex-end',
		width: ScreenWidth * .8,
		height: ScreenHeight * .05,
	},
	cardText: {
		color: colors.red,
	},
});

export default EventCards;
