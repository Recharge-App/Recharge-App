import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import { colors } from '../Components/Colors';

// Takes useState setter as argument and sets value to false

type Props = {
	handleExit: (flag: boolean) => void;
}

const ExitButton = (props: Props) => {
	return(
		<TouchableOpacity style={styles.iconButton} onPress={() => props.handleExit(false)}>
			<Ionicons name='md-close' size={ScreenHeight * .035} color={colors.white}></Ionicons>
		</TouchableOpacity>
	);
}


const styles = StyleSheet.create({
	iconButton: {
		width: ScreenWidth * .10,
		height: ScreenHeight * .05,
		borderRadius: ScreenWidth * .08,
		backgroundColor: colors.red,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export default ExitButton;
