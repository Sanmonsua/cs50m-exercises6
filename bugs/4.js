import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button
      title="Go to Jane's Contact Screen"
      onPress={() => {
        navigation.navigate('Contacts', { name: 'Jane' });
      }}
    />
  </View>
);

const NameContext = React.createContext('Bob')

class InfoScreen extends React.Component { 
  static contextType = NameContext
  render(){
    return(
      <View style={styles.screen}>
        <Text style={styles.label}>{this.context}</Text>
      </View>
    )
  }
  
};

const FriendsScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Friends</Text>
    <Button
      title="Go to Bob's Contact Screen"
      onPress={() => {
        navigation.push('Contacts', { name: 'Bob' });
      }}
    />
  </View>
);

/////
// Do not edit anything above this line
/////

const Tabs = createBottomTabNavigator();


const ContactScreen = ({route}) => {
  return(
    <View style={styles.screen}>
      <NameContext.Provider value={route.params.name}>
        <ContactNavigator />
      </NameContext.Provider>
      
    </View>
  );
}

const Stack = createStackNavigator();

const ContactNavigator = () => {
  return (
      <Tabs.Navigator>
        <Tabs.Screen name="InfoScreen" component={InfoScreen}/>
        <Tabs.Screen name="FriendsScreen" component={FriendsScreen}/>
      </Tabs.Navigator>
  )
}

export default class AppNavigator extends React.Component{
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

