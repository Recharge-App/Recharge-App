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

function Profile({ navigation }: { navigation: any }) {
	
	// Variables
	let first_name = "Mihir";
	let last_name = "Sahu";
	let follows = 100;
	let following = 50;
	const events = [
		{
			id: "1",
			eventName: "You know what it is",
			organizerName: "Mihir Sahu",
			eventLocation: "CougarCS Discord Server",
		},
		{
			id: "2",
			eventName: "You know what it is",
			organizerName: "Mihir Sahu",
			eventLocation: "CougarCS Discord Server",
		},
		{
			id: "3",
			eventName: "You know what it is",
			organizerName: "Mihir Sahu",
			eventLocation: "CougarCS Discord Server",
		},
		{
			id: "4",
			eventName: "You know what it is",
			organizerName: "Mihir Sahu",
			eventLocation: "CougarCS Discord Server",
		}
	];

	const renderEventCards = (eventName: string, organizerName: string, eventLocation: string) => {
		return (
			<EventCards eventName={eventName} organizerName={organizerName} eventLocation={eventLocation} size="long"></EventCards>
		)
	}

	return (
  	  <View style={styles.root}>
			<FlatList
				style={styles.footer}
				data={events}
				renderItem={({item}) => renderEventCards(item.eventName, item.organizerName, item.eventLocation)}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={styles.separatorComponent}></View>}
				maxHeaderHeight={ScreenHeight * .49}
				minHeaderHeight={0}
				AnimationHeaderComponent={
					<View>
	  					<View style={styles.header}>
							<TouchableOpacity style={{alignSelf: 'flex-start', marginLeft: ScreenWidth * .05}}>
								<Ionicons name='md-settings-outline' color={colors.white} size={ScreenHeight* .035}></Ionicons>
							</TouchableOpacity>
							<Avatar rounded size={ScreenWidth * .3} source={require('../../assets/images/profile_pic.jpeg')} />
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
						<Text style={styles.recentEventText}>Recent Activity</Text>
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
		fontFamily: fonts.Lato_700Bold,
	},
	followView: {
		flexDirection: 'row',
		width: ScreenWidth,
		justifyContent: 'space-around',
	},
	followText: {
		color: colors.white,
		fontWeight: 'bold',
		fontFamily: fonts.Lato_700Bold,
	},
	footer: {
		backgroundColor: colors.white,
		flex: 1,
	},
	recentEventText: {
		marginTop: ScreenHeight * .02, 
		fontWeight: 'bold', 
		alignSelf: 'center', 
		marginBottom: ScreenHeight * .02,
	},
	separatorComponent: {
		height: ScreenHeight * .02,
	},
});

export default Profile;
