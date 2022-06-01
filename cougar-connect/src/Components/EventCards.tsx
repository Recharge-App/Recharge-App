import { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions, TouchableOpacity, Modal, Alert, Pressable } from 'react-native';
import { colors } from './Colors';
import { ScreenWidth, ScreenHeight } from './Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useToast } from 'react-native-toast-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function EventCards(props: any) {
	
	// Variables
	let eventName = props.eventName;
	let organizerName = props.organizerName;
	let eventLocation = props.eventLocation;

	let registerConfirmation = "You successfully registered for the event!";
	let peoplePress = "You pressed the people button";

	const toast = useToast();

	return (
		<View style={styles.card}>
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<Image style={{width: ScreenWidth * .5, height: ScreenHeight * .15}} source={{uri: 'https://picsum.photos/200/300'}}></Image>
			</View>
			<View style={styles.textSection}>
				<Text style={styles.cardText}>{eventName}</Text>
				<Text style={styles.cardText}>{organizerName}</Text>
				<Text style={styles.cardText}>{eventLocation}</Text>
			</View>
			<View style={styles.iconButtonView}>
				<TouchableOpacity style={styles.iconButtons} onPress={() => toast.show(registerConfirmation, {type: 'custom', placement: 'top', duration: 4000, offset: 30, animationType: 'slide-in'})}>
					<Ionicons name='md-send' size={ScreenHeight * .035} color={colors.red}></Ionicons>
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconButtons} onPress={() => toast.show(peoplePress, {type: 'custom', placement: 'top', duration: 4000, offset: 30, animationType: 'slide-in'})}>
					<Ionicons name='md-people' size={ScreenHeight * .035} color={colors.red}></Ionicons>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.white,
		width: ScreenWidth * .9,
		height: ScreenHeight * .40,
		borderRadius: ScreenWidth * .06,
		borderWidth: ScreenWidth * .005,
		justifyContent: 'space-evenly',
		borderColor: colors.red,
	},
	textSection: {
		width: ScreenWidth * .9,
		alignItems: 'center',
	},
	cardText: {
		color: colors.black,
	},
	iconButtonView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	iconButtons: {
		width: ScreenWidth * .10,
		height: ScreenHeight * .05,
		borderWidth: 1,
		borderRadius: ScreenWidth * .02,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default EventCards;
