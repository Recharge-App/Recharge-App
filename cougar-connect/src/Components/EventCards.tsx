import { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions, TouchableOpacity, Modal, Alert, Pressable } from 'react-native';
import { colors } from './Colors';
import { fonts } from './Fonts';
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
	let infoPress = "You pressed the info button";

	const toast = useToast();

	return (
		<View style={styles.card}>
			<View style={{flexDirection: 'row', width: ScreenWidth * .9, justifyContent: 'space-around'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Image style={{width: ScreenWidth * .25, height: ScreenHeight * .15, borderRadius: ScreenWidth * .15}} source={require('../../assets/images/profile_pic.jpeg')}></Image>
				</View>
				<View style={{alignItems: 'center', justifyContent: 'space-around'}}>
					<Text style={styles.cardText}>{eventName}</Text>
					<Text style={styles.cardText}>{eventLocation}</Text>
					<Text style={styles.cardText}>{organizerName}</Text>
				</View>
			</View>
			<View style={styles.iconButtonView}>
				<TouchableOpacity style={styles.iconButtons} onPress={() => toast.show(infoPress, {type: 'custom', placement: 'top', duration: 4000, offset: 30, animationType: 'slide-in'})}>
					<Ionicons name='md-information-circle' size={ScreenHeight * .035} color={colors.white}></Ionicons>
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconButtons} onPress={() => toast.show(registerConfirmation, {type: 'custom', placement: 'top', duration: 4000, offset: 30, animationType: 'slide-in'})}>
					<Ionicons name='md-send' size={ScreenHeight * .035} color={colors.white}></Ionicons>
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconButtons} onPress={() => toast.show(peoplePress, {type: 'custom', placement: 'top', duration: 4000, offset: 30, animationType: 'slide-in'})}>
					<Ionicons name='md-people' size={ScreenHeight * .035} color={colors.white}></Ionicons>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.red,
		width: ScreenWidth * .9,
		height: ScreenHeight * .30,
		borderRadius: ScreenWidth * .06,
		justifyContent: 'space-around',
	},
	cardText: {
		color: colors.white,
		fontFamily: fonts.Lato_400Regular,
	},
	iconButtonView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	iconButtons: {
		width: ScreenWidth * .10,
		height: ScreenHeight * .05,
		borderRadius: ScreenWidth * .02,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.red,
	},
});

export default EventCards;
