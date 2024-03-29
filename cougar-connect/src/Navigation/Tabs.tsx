import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../Components/Colors';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Search, Calendar, Profile } from '../Screens/index'
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import TopTab from './TopTab';
import Onboarding from '../Screens/Onboarding';
import { useAuth } from '../Components/Authentication';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CreateEvent from "../Screens/CreateEvent";
import Settings from "../Screens/Settings";

// https://reactnavigation.org/docs/auth-flow/
// https://reactnavigation.org/docs/stack-navigator/
// https://reactnavigation.org/docs/nesting-navigators/

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


// Stuff that appears on the tabs
const AppTab = () => {

    return(
        <SafeAreaView style={{flex: 1}}>
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
				tabBarStyle: {
                    borderTopLeftRadius: ScreenHeight * .03,
                    borderTopRightRadius: ScreenHeight * .03,
                    height: ScreenHeight * .1,
                    position: 'absolute',
					backgroundColor: colors.darkGray,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    shadowOpacity: 0,
                    elevation: 0,
                    bottom: 0,
				},
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                headerShown:false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name="home-sharp" size={28} 
                    style={{
                        color: focused ? colors.lightYellow : colors.white,
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
            <Tab.Screen name="Add" component={CreateEvent} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Ionicons name="add-circle" size={40} 
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
        </SafeAreaView>
    )
}

// Stuff to load when not identified/authenticated
const AuthStack = () => {
    
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Onboarding"
                component={Onboarding}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />
        </Stack.Navigator>
    );
}

const Stacks = () => {

    const { authData } = useAuth();
    //console.log("Logged in with password " + authData?.password);
    
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    {/*AppTab and Misc screens*/}
                    {authData?.authenticated ? (
                        <>
                            <Stack.Screen
                                name="App"
                                component={AppTab}
                            />
                            <Stack.Screen
                                name="Settings"
                                component={Settings}
                            />
                        </>
                    ) : (
                        <Stack.Screen
                            name="Auth"
                            component={AuthStack}
                        />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}


export default Stacks;
