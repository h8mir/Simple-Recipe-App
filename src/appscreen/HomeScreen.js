import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoşgeldin. Bugün ne pişiriyoruz ?</Text>
      <View style={[styles.container, styles.container2]}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SavedInfo')}>
            <Text style={styles.buttonText}>Tariflerim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('DailyInfo')}>
            <Text style={styles.buttonText}>Öneriler</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        padding:20
    },
    container2:{
        justifyContent:"center",
        width: '100%',          // genişliği doldurduk
        gap: 15                 // butonlar arası boşluk (RN 0.71+)
    },
    text:{
        fontSize:24 ,
        fontFamily: 'Roboto',
        marginBottom: 20,
    },
    button:{
        width: screenWidth * 0.8,         // ekran genişliğinin %80'i
        backgroundColor: '#B27212',       // hoş bir kahverengi
        paddingVertical: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#7A4E0C',
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default HomeScreen;
