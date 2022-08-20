import {useState} from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {colors} from "../Components/Colors";
import { ScreenHeight, ScreenWidth } from "../Components/Dimensions";
import Input from "../Components/Input";
import SubmitButton from "../Components/SubmitButton";


const CreateEvent = () => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        //setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(false);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={styles.root}>
            <View style={{flex: .5, justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Input placeholder={"Event Name"}/>
                <Input placeholder={"Location"}/>
            </View>
            <View style={{flex: .3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                {show &&
                    <RNDateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        themeVariant="dark"
                        onChange={onChange}
                        style={{width: ScreenWidth * .24}}
                    />
                }
                {show &&
                    <RNDateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        themeVariant="dark"
                        onChange={onChange}
                        style={{width: ScreenWidth * .22}}
                    />
                }
            </View>
            <View style={{flex: .3, justifyContent: 'space-evenly'}}>
                <SubmitButton title="Create Event" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: colors.black,
        paddingBottom: ScreenHeight * .1,
    }
});

export default CreateEvent;