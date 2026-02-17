import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';

const SavedInfoScreen = () => {
  const [users, setUsers] = useState([
    {
      id: '1',
      baslik: "Yumurta",
      tarif: "Biraz çırp tavaya at yağ at pişir"
    },
    {
      id: '2',
      baslik: "Sucuk",
      tarif: "Tavaya at biraz yağ ile pişir tuzunu at"
    }
  ])

  const [newBaslik, setNewBaslik] = useState('');
  const [newTarif, setNewTarif] = useState('');
  const [showForm, setShowForm] = useState(false);

  const removeItem = (id) => {
    setUsers(prev => prev.filter(item => item.id !== id));
  }

  const addItem = () => {
    if (!newBaslik.trim() || !newTarif.trim()) {
      alert('Başlık ve Tarif boş olamaz!');
      return;
    }
    const newId = (users.length + 1).toString();
    setUsers(prev => [...prev, {
      id: newId,
      baslik: newBaslik,
      tarif: newTarif
    }]);
    setNewBaslik('');
    setNewTarif('');
    setShowForm(false);
  }

  const renderItem = ({ item }) => (
    <View style={styles.tarifContainer}>
      <Text style={styles.baslik}>{item.baslik}</Text>
      <Text style={styles.tarif}>{item.tarif}</Text>
      <TouchableOpacity style={styles.deleteBtn} onPress={() => removeItem(item.id)}>
        <Text style={styles.deleteText}>Sil</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 120 }}
        />

        {showForm && (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Başlık"
              value={newBaslik}
              onChangeText={setNewBaslik}
            />
            <TextInput
              style={[styles.input, {height: 80}]}
              placeholder="Tarif"
              value={newTarif}
              onChangeText={setNewTarif}
              multiline
            />
            <TouchableOpacity style={styles.addBtn} onPress={addItem}>
              <Text style={styles.addBtnText}>Ekle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.addBtn, {backgroundColor: 'gray', marginTop: 5}]} onPress={() => setShowForm(false)}>
              <Text style={styles.addBtnText}>İptal</Text>
            </TouchableOpacity>
          </View>
        )}

        {!showForm && (
          <TouchableOpacity style={styles.addButton} onPress={() => setShowForm(true)}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        )}

      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
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
  },
  addButton:{
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#B27212',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText:{
    color: 'white',
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  form:{
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width:0, height:2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  addBtn:{
    backgroundColor: '#B27212',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addBtnText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
})

export default SavedInfoScreen;
