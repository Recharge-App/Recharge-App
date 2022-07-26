import { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import { colors } from '../Components/Colors';
import { fonts } from '../Components/Fonts';
import ExitButton from '../Components/ExitButton';
import Ionicons from 'react-native-vector-icons/Ionicons';


type Props = {
	visible: boolean,
	eventName: React.ReactNode,
	eventLocation: React.ReactNode,
	eventDate: React.ReactNode,
	eventOrganizer: React.ReactNode,
	eventAbout: React.ReactNode,
}

// This gets exported and should be used to style the eventName, eventLocation, eventDate, and eventOrganizer props
export const styleProp = StyleSheet.create({
	title: {
		color: colors.red,
		fontSize: 25,
		fontWeight: '600',
	},
	eventDetails: {
		color: colors.red,
		fontSize: 18,
	},
	eventAbout: {
		fontFamily: fonts.Lato_400Regular,
		color: colors.red,
		fontSize: 18,
	},
});


export const EventModal: React.FC<Props> = ({ visible, eventName, eventLocation, eventDate, eventOrganizer, eventAbout }) => {

	const [isModalVisible, setModalVisible] = useState(visible);

	const toggleModal = () => {
    	setModalVisible(!isModalVisible);
  	};

	return (
		<Modal style={styles.modalCard} isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} customBackdrop={<View style={{ flex: 1, backgroundColor: colors.white}} />} backdropColor={colors.white}>
			<View style={styles.modalView}>
				<View style={styles.exitButton}>
					<ExitButton handleExit={setModalVisible}></ExitButton>
				</View>
				<View style={styles.eventDetailsView}>
					<View>
						<Text>{eventName}</Text>
					</View>
					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
						<Ionicons name='md-compass' size={ScreenHeight * .035} color={colors.red}></Ionicons>
						<View>{eventLocation}</View>
					</View>
					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
						<Ionicons name='md-calendar' size={ScreenHeight * .035} color={colors.red}></Ionicons>
						<View>{eventDate}</View>
					</View>
					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
						<Ionicons name='md-person' size={ScreenHeight * .035} color={colors.red}></Ionicons>
						<View>{eventOrganizer}</View>
					</View>
				</View>
				<View style={styles.eventAbout}>
					<Text style={{fontSize: 18, color: colors.red}}>About</Text>
					<View>{eventAbout}</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modalCard: {
		margin: 0,
		height: ScreenHeight,
		width: ScreenWidth,
		alignItems: 'center',
	},
	modalView: {
		height: ScreenHeight * .85,
		width: ScreenWidth * .85,
		borderWidth: ScreenWidth * .01,
		borderColor: 'red',
		borderRadius: ScreenWidth * .06,
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: colors.white,
	},
	exitButton: {
		alignSelf: 'flex-start',
		marginLeft: ScreenWidth * .05,
		marginTop: ScreenWidth * .05,
	},
	eventDetailsView: {
		height: ScreenHeight * .30,
		width: ScreenWidth * .80,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginTop: ScreenHeight * .02,
	},
	eventAbout: {
		marginTop: ScreenHeight * .05,
	},
});
