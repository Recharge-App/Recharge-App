import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { FlatList } from '@gemcook/react-native-animated-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CalendarList as Cal, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import EventCards from '../Components/EventCards';
import { ScreenHeight, ScreenWidth } from '../Components/Dimensions';
import { fonts } from '../Components/Fonts';
import { colors } from '../Components/Colors';
import Event from '../Components/Event';


function Calendar({ navigation }: { navigation: any }) {

	// Variables
	let first_name = "Mihir";
	let last_name = "Sahu";
	let follows = 100;
	let following = 50;
	const events: Event[] = [
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
			eventDateTime: [new Date(2022, 7, 19), new Date],
		},
		{
			id: "4",
			eventName: "You know what it is",
			organizerName: "Mihir Sahu",
			eventLocation: "CougarCS Discord Server",
			eventDateTime: [new Date(2022, 7, 22), new Date],
		},
		{
			id: "5",
			eventName: "You know what it is",
			organizerName: "Mihir Sahu",
			eventLocation: "CougarCS Discord Server",
			eventDateTime: [new Date(2022, 8, 21), new Date],
		},
		{
			id: "6",
			eventName: "You know what it is",
			organizerName: "Mihir Sahu",
			eventLocation: "CougarCS Discord Server",
			eventDateTime: [new Date(2022, 8, 19), new Date],
		}
	];
	
	// This array is mutable and is used to change the flatlist depending on which day is clicked
	// Equal to events so that all events show up by defalt
	const [dayEvents, setDayEvents] = useState(events);

	// Render event cards
	const renderEventCards = (eventName: string, organizerName: string, eventLocation: string, eventDateTime: Date[], cardSize: string) => {

		return (
			<EventCards eventName={eventName} organizerName={organizerName} eventLocation={eventLocation} eventDateTime={eventDateTime} cardSize={cardSize}></EventCards>
		);
	}

	// Create data for marking days on calendar
	const calendarMarkedDates = {};
	for (let event of events) {
		calendarMarkedDates[event?.eventDateTime[0].toISOString().split('T')[0]] = {marked: true, dotColor: colors.lightYellow, disableTouchEvent: false};
	}

	// Find all events that occur on a certain day
	const getDayEvents = (day) => {

		// Clear dayEvents
		setDayEvents([]);

		let tempDayEvents: Event[] = [];
		for (let event of events) {
			if (day?.dateString === event?.eventDateTime[0].toISOString().split('T')[0]) {
				tempDayEvents.push(event);
			}
		}	

		setDayEvents(tempDayEvents);
		//dayEvents.map((item) => console.log(item.id));
	}

  return (
  	<View style={{flex: 1, backgroundColor: colors.black, paddingBottom: ScreenHeight * .1}}>

    	<View style={styles.events}>
  			<FlatList
  				data={dayEvents}
				extraData={dayEvents}
				renderItem={({item}) => renderEventCards(item.eventName, item.organizerName, item.eventLocation, item.eventDateTime, "new")}
  				keyExtractor={(item) => item.id}
  				showsHorizontalScrollIndicator={false}
  				showsVerticalScrollIndicator={false}
  				ItemSeparatorComponent={() => <View style={styles.separatorComponent}></View>}
				maxHeaderHeight={ScreenHeight * .52}
				minHeaderHeight={0}
				AnimationHeaderComponent={
					<View>
    					<Cal 
							calendarStyle={styles.calendarListStyle} 
							horizontal={true} 
							pagingEnabled={true} 
							hideArrows={false}
							markingType={'dot'}
							theme={{
								backgroundColor: colors.black,
								calendarBackground: colors.black,
								dayTextColor: colors.white,
								dotColor: colors.lightYellow,
								monthTextColor: colors.white,
								arrowColor: colors.lightYellow,
								todayTextColor: colors.lightYellow,
								selectedDayTextColor: colors.black,
								selectedDayBackgroundColor: colors.lightYellow,
							}}
							markedDates={calendarMarkedDates}
							onDayPress={(day) => getDayEvents(day)}
						/>
					</View>
				}
  			/>
    	</View>
	</View>
  );
}

const styles = StyleSheet.create({
	calendarListStyle: {
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
});


export default Calendar;
