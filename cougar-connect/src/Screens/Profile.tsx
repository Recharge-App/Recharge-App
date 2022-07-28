import { View, Text, Button, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FlatList } from '@gemcook/react-native-animated-scroll-view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import { colors } from '../Components/Colors';
import { fonts } from '../Components/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventCards from '../Components/EventCards';
import SignIn from './SignIn';
import { Avatar } from '@rneui/base';
import { useAuth } from '../Components/Authentication';


function Profile({ navigation }: { navigation: any }) {

    const auth = useAuth();
	
	// Variables
	const first_name = "Mihir";
	const last_name = "Sahu";
	const description = "Computer Science and Finance @UH InfoSec @ CougarCS";
	const follows = 100;
	const following = 50;
	const events = [
		{
			id: "1",
			eventName: "You know what it is",
			organizerName: "Mihir Sahu",
			eventLocation: "CougarCS Discord Server",
			eventDateTime: [new Date, new Date],
		},
		{
			id: "2",
			eventName: "You know what it is",
			organizerName: "Mihir Sahu",
			eventLocation: "CougarCS Discord Server",
			eventDateTime: [new Date, new Date],
		},
		{
			id: "3",
			eventName: "You know what it is",
			organizerName: "Mihir Sahu",
			eventLocation: "CougarCS Discord Server",
			eventDateTime: [new Date, new Date],
		},
		{
			id: "4",
			eventName: "You know what it is",
			organizerName: "Mihir Sahu",
			eventLocation: "CougarCS Discord Server",
			eventDateTime: [new Date, new Date],
		}
	];

	const renderEventCards = (eventName: string, organizerName: string, eventLocation: string, eventDateTime: Date[], cardSize: string) => {

		return (
			<EventCards eventName={eventName} organizerName={organizerName} eventLocation={eventLocation} eventDateTime={eventDateTime} cardSize={cardSize}></EventCards>
		);
	}

	return (
  	  <View style={styles.root}>
			<FlatList
				style={styles.footer}
				data={events}
				renderItem={({item}) => renderEventCards(item.eventName, item.organizerName, item.eventLocation, item.eventDateTime, "new")}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={styles.separatorComponent}></View>}
				maxHeaderHeight={ScreenHeight * .75}
				minHeaderHeight={0}
				AnimationHeaderComponent={
					<View>
	  					<View style={styles.header}>
							<View style={{flexDirection: 'row', justifyContent: 'space-between', width: ScreenWidth}}>
								<TouchableOpacity style={{alignSelf: 'flex-start', marginLeft: ScreenWidth * .05}}>
									<Ionicons name='md-settings-outline' color={colors.lightYellow} size={ScreenHeight* .035}></Ionicons>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{alignSelf: 'flex-end', marginRight: ScreenWidth * .05}}
									onPress={() => {
										auth.signOut();
									}}
								>
									<Ionicons name='md-exit-outline' color={colors.lightYellow} size={ScreenHeight* .035}></Ionicons>
								</TouchableOpacity>
							</View>
							<Avatar rounded size={ScreenWidth * .28} source={require('../../assets/images/profile_pic.jpeg')} />
							<Text style={styles.name}>{ first_name + " " + last_name }</Text>
							<Text style={{width: ScreenWidth * .7, color: colors.white, textAlign: 'center', marginBottom: ScreenHeight * .03}}>{description}</Text>
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
						<View style={{alignItems: 'center', marginTop: ScreenHeight * .04}}>
							<TouchableOpacity style={{backgroundColor: colors.darkGray, height: ScreenHeight * .08, width: ScreenWidth * .75, borderRadius: ScreenWidth * .05, alignItems: 'center', justifyContent: 'center', marginBottom: ScreenHeight * .04}}>
								<Text style={{ color: colors.white, fontSize: ScreenWidth * .06, fontWeight: '700', textAlign: 'center'}}>Edit Profile</Text>
							</TouchableOpacity>
							<View style={[styles.buttonContainer, {marginBottom: ScreenHeight * .04}]}>
								<TouchableOpacity style={styles.signUp}>
									<Text style={{ color: colors.black, fontSize: ScreenWidth * .06, fontWeight: '700' }}>Activity</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.logIn}>
									<Text style={{ color: colors.white, fontSize: ScreenWidth * .06, fontWeight: '700' }}>Created</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				}
			/>
  	  </View>
  	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'flex-start',
		backgroundColor: colors.black,
		height: ScreenHeight,
		width: ScreenWidth,
	},
	header: {
		alignItems: 'center', 
		justifyContent: 'center',
		backgroundColor: colors.black,
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
		backgroundColor: colors.black,
		flex: 1,
	},
	recentEventText: {
		marginTop: ScreenHeight * .02, 
		fontWeight: 'bold', 
		alignSelf: 'center', 
		marginBottom: ScreenHeight * .02,
		color: colors.white,
	},
	separatorComponent: {
		height: ScreenHeight * .02,
	},
	buttonContainer: {
		backgroundColor: colors.darkGray,
		height: ScreenHeight * .08,
		width: ScreenWidth * .75,
		borderRadius: ScreenWidth * .05,
		flexDirection: 'row',
	},
	signUp: {
		height: ScreenHeight * .08,
		width: ScreenWidth * .37,
		borderRadius: ScreenWidth * .05,
		backgroundColor: colors.lightYellow,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logIn: {
		height: ScreenHeight * .08,
		width: ScreenWidth * .37,
		borderRadius: ScreenWidth * .05,
		backgroundColor: colors.darkGray,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Profile;
