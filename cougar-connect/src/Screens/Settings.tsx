import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {colors} from "../Components/Colors";
import {ScreenHeight, ScreenWidth} from "../Components/Dimensions";
import Input from "../Components/Input";
import SubmitButton from "../Components/SubmitButton";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Settings = ({ navigation }: { navigation: any }) => {

    return(
        <View style={styles.root}>
            <TouchableOpacity style={{alignSelf: 'flex-start', marginLeft: ScreenWidth * .05}} onPress={() => navigation.navigate('Profile')}>
                <Ionicons name='ios-arrow-back' color={colors.lightYellow} size={ScreenHeight* .035}></Ionicons>
            </TouchableOpacity>
            <Text style={styles.title}>Reset</Text>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <SubmitButton title="Reset" />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.black,
        paddingBottom: ScreenHeight * .1,
    },
    title: {
        color: colors.lightYellow,
        fontSize: 30,
    },
});

export default Settings;