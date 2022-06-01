import { View, Text, Button, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import { colors } from '../Components/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventCards from '../Components/EventCards';
import SignIn from './SignIn';

function Profile({ navigation }: { navigation: any }) {
	
	// Variables
	let first_name = "Mihir";
	let last_name = "Sahu";
	let follows = 100;
	let following = 50;

	return (
  	  <View style={styles.root}>
	  	<View style={styles.header}>
			<TouchableOpacity style={{alignSelf: 'flex-start', marginLeft: ScreenWidth * .05}}>
				<Ionicons name='md-settings-outline' color={colors.white} size={ScreenHeight* .035}></Ionicons>
			</TouchableOpacity>
  	    	<Image style={styles.tinyLogo} source={require("../../assets/profile_pic.jpeg")} />
			<Text style={styles.name}>{ first_name + " " + last_name }</Text>
			<View style={styles.followView}>
				<TouchableOpacity style={{alignItems: 'center'}} onPress={() => {navigation.navigate('SignIn')}}>
					<Text style={styles.followText}>{follows}</Text>
					<Text style={styles.followText}>Followers</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{alignItems: 'center'}}>
					<Text style={styles.followText}>{following}</Text>
					<Text style={styles.followText}>Following</Text>
				</TouchableOpacity>
			</View>
		</View>
		<View style={styles.footer}>
			<Text style={styles.recentEventText}>Recent Activity</Text>
			<ScrollView>
				<EventCards eventName="Spy Family Watch Party" organizerName="Mihir Sahu" eventLocation="CougarCS Discord Server"></EventCards>
				<EventCards eventName="Spy Family Watch Party" organizerName="Mihir Sahu" eventLocation="CougarCS Discord Server"></EventCards>
				<EventCards eventName="Spy Family Watch Party" organizerName="Mihir Sahu" eventLocation="CougarCS Discord Server"></EventCards>
			</ScrollView>
		</View>
  	  </View>
  	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'flex-start',
		backgroundColor: colors.white,
		height: ScreenHeight,
		width: ScreenWidth,
	},
	header: {
		alignItems: 'center', 
		justifyContent: 'center',
		backgroundColor: colors.red,
		height: ScreenHeight * .45,
		width: ScreenWidth,
	},
	tinyLogo: {
		width: ScreenWidth * .3,
		height: ScreenHeight * .165,
		borderRadius: ScreenWidth * .15,
	},
	name: {
		fontWeight: 'bold',
		color: colors.white,
		margin: ScreenHeight * .03,
	},
	followView: {
		flexDirection: 'row',
		width: ScreenWidth,
		justifyContent: 'space-around',
	},
	followText: {
		color: colors.white,
		fontWeight: 'bold',
	},
	footer: {
		backgroundColor: colors.white,
	},
	recentEventText: {
		marginTop: ScreenHeight * .02, 
		fontWeight: 'bold', 
		alignSelf: 'center', 
		marginBottom: ScreenHeight * .02,
	},
});

export default Profile;
