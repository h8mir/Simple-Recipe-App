import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const SettingScreen = ({ setIsLoggedIn }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={() => setIsLoggedIn(false)} // Bu satır kullanıcıyı LoginScreen'e atar
      >
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  logoutButton:{
    backgroundColor: '#B27212',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  logoutText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default SettingScreen;
