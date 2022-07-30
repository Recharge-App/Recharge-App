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
import { SafeAreaView } from 'react-native-safe-area-context';
import { State } from 'react-native-gesture-handler';
import { useAuth } from '../Components/Authentication';

// https://reactnavigation.org/docs/auth-flow/
// https://reactnavigation.org/docs/stack-navigator/
// https://reactnavigation.org/docs/nesting-navigators/

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const AppTab = () => {

    return(
        //<SafeAreaView style={{flex: 1}}>
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
        //</SafeAreaView>
    )
}

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
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    {authData?.authenticated ? (
                        <Stack.Screen
                            name="App"
                            component={AppTab}
                        />
                    ) : (
                        <Stack.Screen
                            name="Auth"
                            component={AuthStack}
                        />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
    );
}


export default Stacks;
