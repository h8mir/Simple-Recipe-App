import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native';

const data = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
  },
  {
    id: 2,
    username: "hasan",
    password: "hasan123",
  }
];

const LoginScreen = ({ navigation, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Kullanıcıyı data içinde ara
    const user = data.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      // Giriş başarılı
      Alert.alert("Başarılı", "Hoşgeldin " + user.username, [
  { text: "Tamam", onPress: () => setIsLoggedIn(true) }
]);
    } else {
      // Giriş başarısız
      Alert.alert("Hata", "Kullanıcı adı veya şifre yanlış");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Kullanıcı Adı</Text>
      <TextInput 
        style={styles.input}
        placeholder="Kullanıcı adı"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        returnKeyType="next"
      />

      <Text>Şifre</Text>
      <TextInput 
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        returnKeyType="done"
      />

      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  button:{
    backgroundColor: "rgb(178, 114, 18)",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center'
  },
  loginButton:{
    backgroundColor:"rgb(121, 78, 12)"
  },
  buttonText:{
    color: "white",
    fontWeight: 'bold'
  }
});

export default LoginScreen;
