import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
});

/////
// Do not edit anything above this line
/////

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button title="Go to Contact Screen" onPress={() => navigation.navigate('Contacts')} />
  </View>
);

const ContactScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Contact Screen</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
);

const Stack = createStackNavigator();

export default class App extends React.Component{
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Contacts" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

