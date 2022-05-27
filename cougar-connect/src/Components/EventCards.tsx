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
});

export default EventCards;
