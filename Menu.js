import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo icons package

const ListItem = ({ iconName, title, description, onPress }) => (
  <TouchableOpacity style={styles.listItem} onPress={onPress}>
    <Ionicons name={iconName} size={24} color="#FFF" style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </TouchableOpacity>
);

export default function MenuScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}> Menu </Text>
      <ListItem
        title="Démarrer une séance de révision"
        description="Streamlined solution for invoicing, expense tracking, and managing their finances independently."
        onPress={() => navigation.navigate('EntrezCours')}
      />
      <ListItem
        title="Apprendre une nouvelle discipline"
        description="Apprendre à jouer un nouvel instrument, danser ou bien coder ? Trouver toutes les ressources et outils qu'il vous faut."
      />
      <ListItem
        title="Mon profil"
        description="Toutes vos informations mises à jour sont disponibles ici, "
      />
      <ListItem
        title="Mes outils de révisions"
        description="Mes fiches de révisions, Mes flashcards, Mes exercices"
      />
      <ListItem
        title="Mes Documents téléchargés"
        description="Streamlined solution for invoicing, expense tracking, and managing their finances independently."
      />
      <ListItem
        title="Rechercher un thème"
        description="Streamlined solution for invoicing, expense tracking, and managing their finances independently."
      />
    </ScrollView>   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000', // Replace with actual background color
  },
header: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#FFF',
  padding: 20,
  marginTop: 50, // Ajoutez une marge en haut pour descendre le titre
  textAlign: 'center', // Ceci va centrer le texte
},
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20, // Adjust as needed
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 10, // Adjust as needed

  },
  textContainer: {
    flex: 1,
},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  description: {
    fontSize: 14,
    color: '#FFF',
  },
});