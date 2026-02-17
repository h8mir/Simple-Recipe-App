import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../loginandsign/LoginScreen'

const Stack = createNativeStackNavigator();

export default function FormTabs({ setIsLoggedIn, setUser}){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Giriş Ekranı'>
                {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
