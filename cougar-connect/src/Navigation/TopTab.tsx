import {View} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OrganizationsTab, StudentsTab } from '../Screens';
import { colors } from '../Components/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native'
import Search from '../Screens/Search';
import {backgroundColor} from "react-native-calendars/src/style";

const Tab = createMaterialTopTabNavigator();

function TopTab() {
  return (
      //<SafeAreaView style={{flex:1, backgroundColor: colors.white}}>
	  <>
	  	<View style={{backgroundColor: colors.black, alignItems: 'center'}}>
	  		<Search/>
	  	</View>
      	<Tab.Navigator screenOptions={{
			tabBarActiveTintColor: colors.white,
      		tabBarIndicatorStyle: { backgroundColor: colors.lightYellow},
			tabBarItemStyle: {backgroundColor: colors.black},
		}}
      	  >
      	  <Tab.Screen name="Organizations" component={OrganizationsTab} />
      	  <Tab.Screen name="Students" component={StudentsTab} />
      	</Tab.Navigator>
	  </>
      //</SafeAreaView>

  );
}


export default TopTab;
