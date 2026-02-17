import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../appscreen/HomeScreen';
import SavedInfoScreen from '../appscreen/SavedInfoScreen';
import DailyInfoScreen from '../appscreen/DailyInfoScreen';
import SettingScreen from '../appscreen/SettingScreen';

const Tab = createBottomTabNavigator();

export default function MainTab({ user, setIsLoggedIn }) { // ✅ 1. Buraya setIsLoggedIn ekledik
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'SavedInfo') {
        iconName = focused ? 'heart' : 'heart-outline';
      } 
      else if (route.name === 'DailyInfo') {
        iconName = focused ? 'pizza' : 'pizza-outline';
      } 
      else if (route.name === 'Favorites') {
        iconName = focused ? 'star' : 'star-outline';
      } 
      else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      } 
      // Diğer route’lar için ikonlar ekle

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#B27212',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: '#fff',
      height: 60,
    },
  })}

    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerTitleAlign: 'center', title: "Ana Menü"}}/>
      <Tab.Screen name="SavedInfo" component={SavedInfoScreen} options={{headerTitleAlign: 'center', title: "Tariflerim"}}/>
      <Tab.Screen name="DailyInfo" component={DailyInfoScreen} options={{headerTitleAlign: 'center', title: "Öneriler"}}/>
      
      {/* ✅ 2. BURASI DEĞİŞTİ: SettingScreen'e prop'u gönderiyoruz */}
      <Tab.Screen name="Settings" options={{headerTitleAlign: 'center', title: "Ayarlar"}}>
        {(props) => <SettingScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
