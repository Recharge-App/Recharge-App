import { View, Text, StyleSheet, Image } from "react-native";
import { ScreenWidth, ScreenHeight } from "./Dimensions";
import { colors } from "./Colors";


const Loading = () => {

    return(
        <View style={styles.root}>
            <View style={styles.content}>
                <Image source={require("../../assets/images/Loading-Ring.gif")} />
                <Text style={styles.didYouKnowText}>Did you know?</Text>
                <Text style={{color: colors.white}}>Recharge is the best!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        height: ScreenHeight,
        width: ScreenWidth,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    content: {
        height: ScreenHeight * .5, 
        flexDirection: 'column', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
    },
    didYouKnowText: {
        color: colors.lightYellow,
        fontSize: 20
    }
});

export default Loading;