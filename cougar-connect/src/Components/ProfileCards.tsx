import { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions, TouchableOpacity, Modal, Alert, Pressable } from 'react-native';
import { colors } from './Colors';
import { ScreenWidth, ScreenHeight } from './Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useToast } from 'react-native-toast-notifications';


function ProfileCards(props: any) {
	
	return(
		
	);

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

};

export default ProfileCards;
