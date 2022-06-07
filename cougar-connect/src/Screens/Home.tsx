import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../Components';
import EventCards from '../Components/EventCards';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';


function Home({ navigation }: { navigation: any }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View>
					<EventCards style={styles.cards} eventName="you know what it is" organizerName="Mihir Sahu" eventLocation="CougarCS Discord Server"></EventCards>
					<EventCards style={styles.cards} eventName="you know what it is" organizerName="Mihir Sahu" eventLocation="CougarCS Discord Server"></EventCards>
					<EventCards style={styles.cards} eventName="you know what it is" organizerName="Mihir Sahu" eventLocation="CougarCS Discord Server"></EventCards>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	cards: {
		padding: ScreenHeight * .5,
	}
});


export default Home;

