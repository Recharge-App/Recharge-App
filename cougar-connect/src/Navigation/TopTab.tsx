import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OrganizationsTab, StudentsTab } from '../Screens';
import { colors } from '../Components/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native'
import Search from '../Screens/Search';

const Tab = createMaterialTopTabNavigator();

function TopTab() {
  return (
      //<SafeAreaView style={{flex:1, backgroundColor: colors.white}}>
	  <>
	  	<Search/>
      	<Tab.Navigator screenOptions={{
      	  tabBarActiveTintColor: colors.red,
      	  tabBarIndicatorStyle: { backgroundColor: colors.red},
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
