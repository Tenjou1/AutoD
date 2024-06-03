import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native';


const LoginSignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Text Section */}
      <Text style={styles.title}>Connexion ou inscription</Text>
      <Text style={styles.description}>
        Connectez-vous ou créez un compte pour passer un quiz, participer à des défis et bien plus encore.
      </Text>

      {/* Buttons */}
  <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginButtonText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createaccountButton} onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.createaccountButtonText}>Créer un compte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.nextButtonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
    buttonsContainer: {
    width: '80%',
    alignItems: 'center',
  },
  loginButton: {
    marginTop : 1,
    backgroundColor: '#0000FF',
    padding: 15,
    borderRadius: 30,
    width: '60%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
    createaccountButton: {
    marginTop : 10,
    backgroundColor: '#0000FF',
    padding: 15,
    borderRadius: 30,
    width: '60%',
    alignItems: 'center',
  },
  createaccountButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  nextButton: {
    marginTop : 10,
    backgroundColor: '#0000FF',
    padding: 15,
    borderRadius: 30,
    width: '60%',
  },
  nextButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginSignupScreen;