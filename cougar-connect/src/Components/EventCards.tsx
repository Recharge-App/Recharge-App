import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from './Colors';
import { fonts } from './Fonts';
import { ScreenWidth, ScreenHeight } from './Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useToast } from 'react-native-toast-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from '@rneui/base';


function EventCards(props: any) {
	
	// Variables
	let eventName = props.eventName;
	let organizerName = props.organizerName;
	let eventLocation = props.eventLocation;
	let size = props.size;

	let registerConfirmation = "You successfully registered for the event!";
	let peoplePress = "You pressed the people button";
	let infoPress = "You pressed the info button";

	const toast = useToast();

	switch(size) {
		case "long": {
			return (
				<View style={longStyles.card}>
					<View style={{flexDirection: 'row', width: ScreenWidth * .9, justifyContent: 'space-around'}}>
						<View style={{justifyContent: 'center', alignItems: 'center'}}>
							<Avatar rounded size={ScreenWidth * .27} source={require('../../assets/images/profile_pic.jpeg')} />
						</View>
						<View style={{alignItems: 'center', justifyContent: 'space-around'}}>
							<Text style={longStyles.cardText}>{eventName}</Text>
							<Text style={longStyles.cardText}>{eventLocation}</Text>
							<Text style={longStyles.cardText}>{organizerName}</Text>
						</View>
					</View>
					<View style={longStyles.iconButtonView}>
						<TouchableOpacity style={longStyles.iconButtons} onPress={() => toast.show(registerConfirmation, {type: 'custom', placement: 'top', duration: 4000, offset: 30, animationType: 'slide-in'})}>
							<Ionicons name='md-information-circle' size={ScreenHeight * .035} color={colors.white}></Ionicons>
						</TouchableOpacity>
						<TouchableOpacity style={longStyles.iconButtons} onPress={() => toast.show(registerConfirmation, {type: 'custom', placement: 'top', duration: 4000, offset: 30, animationType: 'slide-in'})}>
							<Ionicons name='md-send' size={ScreenHeight * .035} color={colors.white}></Ionicons>
						</TouchableOpacity>
						<TouchableOpacity style={longStyles.iconButtons} onPress={() => toast.show(peoplePress, {type: 'custom', placement: 'top', duration: 4000, offset: 30, animationType: 'slide-in'})}>
							<Ionicons name='md-people' size={ScreenHeight * .035} color={colors.white}></Ionicons>
						</TouchableOpacity>
					</View>
				</View>
			);
			break;
		}
		case "short": {
			return (
				<View style={shortStyles.card}>
					<View style={{flexDirection: 'row', width: ScreenWidth * .45, height: ScreenHeight * .15, justifyContent: 'space-around'}}>
						<View style={{alignItems: 'center', justifyContent: 'space-around'}}>
							<Text style={shortStyles.cardText}>{eventName}</Text>
							<Text style={shortStyles.cardText}>{eventLocation}</Text>
							<Text style={shortStyles.cardText}>{organizerName}</Text>
						</View>
					</View>
					<View style={shortStyles.iconButtonView}>
						<TouchableOpacity style={shortStyles.iconButtons} onPress={() => toast.show(registerConfirmation, {type: 'custom', placement: 'top', duration: 4000, offset: 30, animationType: 'slide-in'})}>
							<Ionicons name='md-send' size={ScreenHeight * .035} color={colors.white}></Ionicons>
						</TouchableOpacity>
						<TouchableOpacity style={shortStyles.iconButtons} onPress={() => toast.show(peoplePress, {type: 'custom', placement: 'top', duration: 4000, offset: 30, animationType: 'slide-in'})}>
							<Ionicons name='md-people' size={ScreenHeight * .035} color={colors.white}></Ionicons>
						</TouchableOpacity>
					</View>
				</View>
			);
			break;
		}
	}
}

const longStyles = StyleSheet.create({
	card: {
		backgroundColor: colors.red,
		width: ScreenWidth * .9,
		height: ScreenHeight * .30,
		borderRadius: ScreenWidth * .06,
		justifyContent: 'space-around',
	},
	cardText: {
		color: colors.white,
		fontFamily: fonts.Lato_700Bold,
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

const shortStyles = StyleSheet.create({
	card: {
		backgroundColor: colors.red,
		width: ScreenWidth * .5,
		height: ScreenHeight * .30,
		borderRadius: ScreenWidth * .06,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	cardText: {
		color: colors.white,
		fontFamily: fonts.Lato_700Bold,
	},
	iconButtonView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: ScreenWidth * .45,
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
