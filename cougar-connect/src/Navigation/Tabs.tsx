import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../Components/Colors';
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity} from 'react-native';

import { Home, Search, Calendar,Profile } from '../Screens/index'

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: colors.white,
                    borderRadius: 15,
                    height: 90,
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                //headerShown:false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name="home-sharp" size={28} 
                    style={{
                        color: focused ? colors.red : colors.black
                    }}/>
                    </View>
                ),
            }}
            />
            <Tab.Screen name="Search" component={Search} options={{
                headerShown:false,
                tabBarIcon: ({focused}) => (
                    <Ionicons name="search-sharp" size={28} 
                    style={{
                        color: focused ? colors.red : colors.black
                    }}/>
                ),
            }}
            />
            <Tab.Screen name="Calendar" component={Calendar} options={{
                //headerShown:false,
                tabBarIcon: ({focused}) => (
                    <Ionicons name="calendar-sharp" size={28} 
                    style={{
                        color: focused ? colors.red : colors.black
                    }}/>
                ),
            }}
            />
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown:false,
                tabBarIcon: ({focused}) => (
                    <Ionicons name="person-sharp" size={28} 
                    style={{
                        color: focused ? colors.red : colors.black
                    }}/>
                ),
            }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;