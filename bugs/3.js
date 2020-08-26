import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
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

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.label}>Home Screen</Text>
        <Button
          title="Go to Jane's Contact Screen"
          onPress={() => {
            this.props.navigation.navigate('ContactScreen', { name: 'Jane' });
          }}
        />
        <Button
          title="Edit Bob's Contact Screen"
          onPress={() => {
            this.props.navigation.navigate('ContactScreen', {
              name: 'Bob',
              isEditing: true,
            });
          }}
        />
      </View>
    );
  }
}

/////
// Do not edit anything above this line
/////

class ContactScreen extends React.Component {

  render() {
    const {isEditing} = this.props.route.params;
    const message = isEditing
      ? 'Now editing. Press the upper right "Done" button to go back.'
      : 'Press "Edit" to start editing.';
    return (
      <View style={styles.screen}>
        <Text style={styles.label}>{message}</Text>
      </View>
    );
  }
}

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle:"Home"}} />
          <Stack.Screen 
            name="ContactScreen" 
            component={ContactScreen} 
            options={ ({route, navigation:{setParams}}) => ({
                headerTitle: route.params.name,
                headerRight: () => (
                  <Button 
                    onPress={() => setParams({
                      isEditing : !route.params.isEditing,
                    })} 
                    title={ route.params.isEditing ? "Done" : "Edit" } 
                  />
                )
              })
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
};
