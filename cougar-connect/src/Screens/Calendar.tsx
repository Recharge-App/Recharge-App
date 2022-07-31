import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from '@gemcook/react-native-animated-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CalendarList as Cal, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import EventCards from '../Components/EventCards';
import { ScreenHeight, ScreenWidth } from '../Components/Dimensions';
import { fonts } from '../Components/Fonts';
import { colors } from '../Components/Colors';


function Calendar({ navigation }: { navigation: any }) {

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
  	<View style={{flex: 1, backgroundColor: colors.black, paddingBottom: ScreenHeight * .1}}>

    	<View style={styles.events}>
  			<FlatList
  				data={events}
				renderItem={({item}) => renderEventCards(item.eventName, item.organizerName, item.eventLocation, item.eventDateTime, "new")}
  				keyExtractor={(item) => item.id}
  				showsHorizontalScrollIndicator={false}
  				showsVerticalScrollIndicator={false}
  				ItemSeparatorComponent={() => <View style={styles.separatorComponent}></View>}
				maxHeaderHeight={ScreenHeight * .52}
				minHeaderHeight={0}
				AnimationHeaderComponent={
					<View>
    					<Cal style={styles.calendar} horizontal={true} pagingEnabled={true} hideArrows={false}/>
					</View>
				}
  			/>
    	</View>
	</View>
  );
}

const styles = StyleSheet.create({
	calendar: {
		width: ScreenWidth,
		backgroundColor: colors.black,
	},
	events: {
		width: ScreenWidth,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	separatorComponent: {
		height: ScreenHeight * .02,
	},
	recentEventText: {
		marginTop: ScreenHeight * .02, 
		fontWeight: 'bold', 
		alignSelf: 'center', 
		marginBottom: ScreenHeight * .02,
	},
});


export default Calendar;
