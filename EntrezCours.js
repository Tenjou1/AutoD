import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker'; // Importez DocumentPicker

export default function CreateEntrezCours({ navigation }) {
  const [image, setImage] = useState(null);
  const [quizTitle, setQuizTitle] = useState('');
  const [category, setCategory] = useState('');
  const [course, setCourse] = useState(null); // Changez la valeur initiale pour gérer les documents

  // Ajoutez une fonction pour choisir un document PDF
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf', // Assurez-vous de limiter le type à PDF
      copyToCacheDirectory: true, // Optionnel: Copie le fichier dans le cache de l'app
    });
    if (result.type === 'success') {
      setCourse(result); // Stockez le résultat du document choisi
    }
  };

  const handleSubmit = () => {
    // Submit data and navigate
    // Assurez-vous d'inclure le traitement pour le fichier PDF sélectionné en plus des autres données
  };

  return (
    <View style={styles.container}>
      <Button title="Ajouter un cours" onPress={pickDocument} />
      <Button title="Suivant" onPress={() => navigation.navigate('FormatSelection')} />
      {/* Affichez le nom du fichier PDF sélectionné si disponible */}
      {course && <Text>{course.name}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});