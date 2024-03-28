import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import MainScreen from './screens/MainScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return(
    //<Main/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={MainScreen} name='Main' options={{headerShown: false}}/>
        <Stack.Screen component={HomeScreen} name='Home' options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
