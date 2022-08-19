import {useState} from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import {colors} from "../Components/Colors";
import { ScreenHeight, ScreenWidth } from "../Components/Dimensions";
import Input from "../Components/Input";
import SubmitButton from "../Components/SubmitButton";


const CreateEvent = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);

    const onChange = (event, selectedDate: Date) => {
        const currentDate = selectedDate;
        //setShow(false);
        setDate(currentDate);
    };

    /*
    const showMode = (currentMode: string) => {
        if (Platform.OS === 'android') {
            setShow(false);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };
    */
    const showMode = (currentMode: string) => {
        setMode(currentMode);
    }

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={styles.root}>
            <Input placeholder={"Event Name"}/>
            <Input placeholder={"Location"}/>
            <Text style={{color: colors.white}}>selected: {date.toLocaleString()}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    display="default"
                    themeVariant="dark"
                />
            )}
            <SubmitButton title="Create Event" />
        </View>
    );
}


const styles = StyleSheet.create({
    root: {
        height: ScreenHeight,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.black,
        paddingBottom: ScreenHeight * .1,
        borderColor: colors.white,
        borderWidth: 1,
    }
});

export default CreateEvent;