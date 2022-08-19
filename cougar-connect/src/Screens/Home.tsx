import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Header } from '../Components';
import EventCards, {eventProps} from '../Components/EventCards';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import { styleProp, EventModal } from '../Components/EventModal';
import { colors } from '../Components/Colors';


function Home({ navigation }: { navigation: any }) {
	
	// Arry of events we want to render
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
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.black, paddingBottom: ScreenHeight * .1}}>
			<FlatList
				data={events}
				renderItem={({item}) => renderEventCards(item.eventName, item.organizerName, item.eventLocation, item.eventDateTime, "new")}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={styles.separatorComponent}></View>}
			/>
			<EventModal 
			visible={false} 
			eventName={
				<View>
					<Text style={styleProp.title}>
						Spy x Family
					</Text>
				</View>
			}
			eventLocation={
				<View>
					<Text style={styleProp.eventDetails}>
						CougarCS Discord Server
					</Text>
				</View>
			}
			eventDate={
				<View>
					<Text style={styleProp.eventDetails}>
						Saturday 25, 2022
					</Text>
				</View>
			}
			eventOrganizer={
				<View>
					<Text style={styleProp.eventDetails}>
						Mihir Sahu
					</Text>
				</View>
			}
			eventAbout={
				<View>
					<Text style={styleProp.eventAbout}>
						Lol
					</Text>
				</View>
			}
			></EventModal>
		</View>
	);
}

const styles = StyleSheet.create({
	separatorComponent: {
		height: ScreenHeight * .02,
	},
});


export default Home;

