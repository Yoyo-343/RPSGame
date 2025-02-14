import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Share,
} from 'react-native';
import { generateGameCode } from '../utils/gameUtils';

const HomeScreen = ({ navigation }) => {
  const createNewGame = async () => {
    const newGameCode = generateGameCode();
    try {
      await Share.share({
        message: `Join my Rock, Paper, Scissors game! Use code: ${newGameCode}`,
      });
      navigation.navigate('Game', { 
        gameCode: newGameCode,
        isCreator: true 
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to share game code');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock Paper Scissors</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={createNewGame}
      >
        <Text style={styles.buttonText}>Create New Game</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('JoinGame')}
      >
        <Text style={styles.buttonText}>Join Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 50
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500'
  }
});

export default HomeScreen;
