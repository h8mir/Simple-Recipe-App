import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const DailyInfoScreen = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios.get('https://dummyjson.com/recipes')
      .then(res => {
        const recipes = res.data.recipes || [];
        // İlk 3 tarifi al
        setFood(recipes.slice(0, 3));
      })
      .catch(err => {
        console.error('API hatası:', err);
      });
  };

  const removeItem = (id) => {
    setFood(prev => prev.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => {
    // instructions dizisini stringe çeviriyoruz
    const description = item.instructions ? item.instructions.join(' ') : 'Tarif açıklaması yok';

    return (
      <View style={styles.tarifContainer}>
        <Text style={styles.baslik}>{item.name}</Text>
        <Text style={styles.tarif}>{description}</Text>
        <TouchableOpacity style={styles.deleteBtn} onPress={() => removeItem(item.id)}>
          <Text style={styles.deleteText}>Sil</Text>
        </TouchableOpacity>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={food}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 20,
    backgroundColor: '#fff',
  },
  tarifContainer:{
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#F8E9D2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B27212',
  },
  baslik:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#7A4E0C',
  },
  tarif:{
    fontSize: 16,
    marginBottom: 10,
    color: '#4B3B00',
  },
  deleteBtn:{
    backgroundColor: '#B27212',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  deleteText:{
    color: 'white',
    fontWeight: 'bold',
  }
});

export default DailyInfoScreen;
