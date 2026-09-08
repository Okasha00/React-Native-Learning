import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Welcome to Sameer Store</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold',
  }
});