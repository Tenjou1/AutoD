import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function QuizFormatSelectionScreen({ navigation }) {
  const [selectedFormat, setSelectedFormat] = useState(null);

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

const handleSelectFormat = (format) => {
  setSelectedFormat(format);
  
  // Déterminer l'écran de destination basé sur le format sélectionné
  let screenName;
  switch (format) {
    case 'multiple':
      screenName = 'InterfaceQuestion'; // Remplacez par le nom de votre écran pour ce format
      break;
    case 'single':
      screenName = 'SingleChoiceScreen'; // Ajustez selon vos écrans
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
      screenName = 'HomeScreen'; // Écran par défaut si aucun format n'est reconnu
  }

  // Naviguer vers l'écran sélectionné
  navigation.navigate(screenName);
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
    width: '45%', // Approximately 2 columns on the screen
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2, // Shadow for Android
    shadowColor: '#000000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
  },
  formatText: {
    textAlign: 'center',
  },
});