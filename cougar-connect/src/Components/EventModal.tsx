import { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import { colors } from '../Components/Colors';
import { fonts } from '../Components/Fonts';


type Props = {
	visible: boolean,
	jsxElement?: React.ReactNode,
}

const defaultElement = () => {
	return(
		<View style={{ flex: 1 }}>
			<Text style={styles.modalText}>I am the modal content!</Text>
		</View>
	)
}

const EventModal: React.FC<Props> = ({ visible, jsxElement }) => {

	const [isModalVisible, setModalVisible] = useState(visible);

	const toggleModal = () => {
    	setModalVisible(!isModalVisible);
  	};

	return (
		<Modal style={styles.modalCard} isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} customBackdrop={<View style={{ flex: 1, backgroundColor: colors.white}} />} backdropColor={colors.white}>
			<View style={{ flex: 1 }}>
				{jsxElement ? <Text>{jsxElement}</Text> : defaultElement()}
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modalCard: {
		marginHorizontal: ScreenWidth * .05,
		marginVertical: ScreenHeight * .05,
		width: ScreenWidth,
		borderWidth: 3,
		borderColor: 'red',
	},
	modalText: {
		fontFamily: fonts.Lato_400Regular,
	},
});


export default EventModal;
