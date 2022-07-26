import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../Components/Colors';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Search, Calendar, Profile } from '../Screens/index'
import TopTab from './TopTab';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Tabs = () => {

    return(
        //<SafeAreaView style={{flex: 1}}>
        <NavigationContainer>            

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
				tabBarInactiveBackgroundColor: colors.black,
				tabBarActiveBackgroundColor: colors.black,
				tabBarStyle: {
					borderRadius: ScreenWidth * .05,
					backgroundColor: colors.black
				},
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                headerShown:false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name="home-sharp" size={28} 
                    style={{
                        color: focused ? colors.lightYellow : colors.white
                    }}/>
                    </View>
                ),
            }}
            />
            <Tab.Screen name="Search" component={TopTab} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Ionicons name="search-sharp" size={28} 
                    style={{
                        color: focused ? colors.lightYellow : colors.white
                    }}/>
                ),
            }}
            />
            <Tab.Screen name="Calendar" component={Calendar} options={{
                headerShown:false,
                tabBarIcon: ({focused}) => (
                    <Ionicons name="calendar-sharp" size={28} 
                    style={{
                        color: focused ? colors.lightYellow : colors.white
                    }}/>
                ),
            }}
            />
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown:false,
                //headerStyle: { backgroundColor: colors.red },
                tabBarIcon: ({focused}) => (
                    <Ionicons name="person-sharp" size={28} 
                    style={{
                        color: focused ? colors.lightYellow : colors.white
                    }}/>
                ),
            }}
            />
        </Tab.Navigator>
        </NavigationContainer>
        //</SafeAreaView>
    )
}

export default Tabs;
