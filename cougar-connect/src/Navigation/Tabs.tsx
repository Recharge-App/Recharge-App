import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../Components/Colors';
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Search, Calendar,Profile } from '../Screens/index'
import { SearchBar, TopTab } from '../Components';
const Tab = createBottomTabNavigator();
const Tabs = () => {


    return(
        <NavigationContainer>            

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: colors.white,
                    borderRadius: 15,
                    height: 50,
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
            <Tab.Screen name="Search" component={TopTab} options={{
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
        </NavigationContainer>
    )
}

export default Tabs;