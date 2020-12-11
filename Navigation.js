import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';

import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import DetaileFormation from './Screens/DetaileFormation';
import Tabs from './Tabs/tabs';
const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="DetaileFormation">
                <Stack.Screen name="DetaileFormation" component={DetaileFormation} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
                <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>  
    );
};

export default Navigation;