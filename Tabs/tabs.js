import React from 'react';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Formation from '../Screens/Formation';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="My Formations"
                component={Formation}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (

                        <Icon name={'list'} size={size} color={focused ? '#253575' : color} />
                    )
                }}>

            </Tab.Screen>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (

                        <Icon name={'home'} size={size} color={focused ? '#253575' : color} />
                    )
                }}>

            </Tab.Screen>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (

                        <Icon name={'user'} size={size} color={focused ? '#253575' : color} />
                    )
                }}>

            </Tab.Screen>
            
        </Tab.Navigator>
    );
}


export default Tabs;