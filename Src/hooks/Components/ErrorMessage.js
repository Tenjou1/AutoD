// src/components/ErrorMessage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Erreur : {message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'red',
  },
});

export default ErrorMessage;