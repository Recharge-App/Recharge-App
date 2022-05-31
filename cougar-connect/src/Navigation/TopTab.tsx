import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import { SearchBar } from 'react-native-screens';
import { Home } from '../Screens';
import { colors } from '../Components/Colors';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function TopTab() {
  return (

      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: colors.red,
        tabBarIndicatorStyle: { backgroundColor: colors.red},
        }}
        >
        <Tab.Screen name="Organizations" component={Home} />
        <Tab.Screen name="Students" component={Home} />
      </Tab.Navigator>
  );
}

export default TopTab;