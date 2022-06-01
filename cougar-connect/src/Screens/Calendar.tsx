import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar as Cal,CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';




function Calendar({ navigation }: { navigation: any }) {
  return (
    <Cal
    />
  );
}


export default Calendar;