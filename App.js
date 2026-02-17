import { View, Text, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react'
import MainTab from './src/screens/MainTab';
import FormTabs from './src/screens/FormTabs'

// ... diğer importlar aynı

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        // BURASI DEĞİŞTİ: setIsLoggedIn fonksiyonunu MainTab'e gönderiyoruz
        <MainTab setIsLoggedIn={setIsLoggedIn} /> 
      ) : (
        <FormTabs setIsLoggedIn={setIsLoggedIn}/>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})

export default App;