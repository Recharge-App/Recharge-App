import { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";


const defaultElement = () => {
	return(
		<View style={{ flex: 1 }}>
			<Text>I am the modal content!</Text>
		</View>
	)
}

function EventModal(props?: any) {

	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
    	setModalVisible(!isModalVisible);
  	};

	return (
		<Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
			<View style={{ flex: 1 }}>
				{props ? props.children : defaultElement}
			</View>
		</Modal>
	);
}

export default EventModal;
