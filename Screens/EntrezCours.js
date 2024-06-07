import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import DataContext, { DataProvider } from '../src/context/DataContext';

export default function QuizFormatSelectionScreen({ navigation }) {
  const [selectedFormat, setSelectedFormat] = useState(null);
  const { data, setData } = useContext(DataContext);

  const formats = [
    { key: 'multiple', text: 'Questions à choix multiples' },
    { key: 'single', text: 'Questions à choix unique' },
    { key: 'fill', text: 'Textes à trou' },
    { key: 'revision', text: 'Fiches de révision' },
    { key: 'flashcards', text: 'Flashcards' },
    { key: 'exercises', text: 'Exercices' },
    { key: 'audio', text: 'Résumés audios' },
    { key: 'mix', text: 'Mix' },
  ];

  const handleSelectFormat = async (format) => {
    setSelectedFormat(format);
    const requestData = { ...data, format };

    try {
      const response = await axios.post('https://yourapi.com/endpoint', requestData);
      if (response.status === 200) {
        Alert.alert('Succès', 'Le cours a été enregistré avec succès.');
        let screenName;
        switch (format) {
          case 'multiple':
            screenName = 'InterfaceQuestion';
            break;
          case 'single':
            screenName = 'SingleChoiceScreen';
            break;
          case 'fill':
            screenName = 'FillBlanksScreen';
            break;
          case 'revision':
            screenName = 'RevisionScreen';
            break;
          case 'flashcards':
            screenName = 'FlashcardsScreen';
            break;
          case 'exercises':
            screenName = 'ExercisesScreen';
            break;
          case 'audio':
            screenName = 'AudioSummaryScreen';
            break;
          case 'mix':
            screenName = 'MixedFormatScreen';
            break;
          default:
            screenName = 'HomeScreen';
        }
        navigation.navigate(screenName);
      } else {
        Alert.alert('Erreur', 'Une erreur est survenue lors de l\'enregistrement du cours.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de l\'envoi des données. Veuillez réessayer.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Choisissez le format</Text>
      <View style={styles.formatContainer}>
        {formats.map((format) => (
          <TouchableOpacity
            key={format.key}
            style={[
              styles.formatButton,
              { backgroundColor: selectedFormat === format.key ? '#DDEEFF' : '#FFFFFF' }
            ]}
            onPress={() => handleSelectFormat(format.key)}
          >
            <Text style={styles.formatText}>{format.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  formatContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  formatButton: {
    padding: 20,
    margin: 5,
    width: '45%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
  },
  formatText: {
    textAlign: 'center',
  },
});
