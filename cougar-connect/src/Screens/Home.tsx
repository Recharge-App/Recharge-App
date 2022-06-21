import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Header } from '../Components';
import EventCards from '../Components/EventCards';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import { styleProp, EventModal } from '../Components/EventModal';
import { colors } from '../Components/Colors';
import { fonts } from '../Components/Fonts';


function Home({ navigation }: { navigation: any }) {
	
	// Arry of events we want to render
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
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<FlatList
				data={events}
				renderItem={({item}) => renderEventCards(item.eventName, item.organizerName, item.eventLocation)}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={styles.separatorComponent}></View>}
			/>
			<EventModal 
			visible={false} 
			eventName={
				<View><Text style={styleProp.title}>Spy x Family</Text></View>
			}
			eventLocation={
				<View><Text style={styleProp.eventDetails}>CougarCS Discord Server</Text></View>
			}
			eventDate={
				<View><Text style={styleProp.eventDetails}>Saturday 25, 2022</Text></View>
			}
			eventOrganizer={
				<View><Text style={styleProp.eventDetails}>Mihir Sahu</Text></View>
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

