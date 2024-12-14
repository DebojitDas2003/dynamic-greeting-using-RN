import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'

const App: React.FC = () => {
  const [greeting, setGreeting] = useState('')
  const [name, setName] = useState('')

  const getGreetings = (): string => {
    const hour = new Date().getHours()
    if (hour < 12) {
      return 'Good Morning'
    } else if (hour == 12) {
      return 'Good Noon'
    } else if (hour > 12 && hour < 18) {
      return 'Good Afternoon'
    } else if (hour > 18 && hour < 20) {
      return 'Good Evening'
    } else {
      return 'Good Night'
    }
  }

  const handleGreetings = () => {
    if (name.trim()) {
      setGreeting(`${getGreetings()}, ${name}!`)
      Alert.alert('Greeting', `${getGreetings()}, ${name}!`)
    } else {
      setGreeting('Please enter a name.')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Greetings</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <TouchableOpacity onPress={handleGreetings}>
        <Text>Greet</Text>
      </TouchableOpacity>
      {greeting !== '' && <Text>{greeting}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
  },
})

export default App
