import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import GamePad from './assets/GamePad.svg'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'


const Stack = createNativeStackNavigator();

const App = () => {
  return(
    //<Main/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name='Main' options={{headerShown: false}}/>
        <Stack.Screen component={HomeScreen} name='Home' options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const Main = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: '#ff'
    }}>
      {/* GAMEON test */}
      <View>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
          marginTop:30
        }}>GAMEON</Text>
      </View>

      {/* Gaming image */}
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <GamePad width={300} height={300} style={{transform: [{rotate:'-15deg'}]}} />
      </View>
      <TouchableOpacity
      onPress={() => navigation.navigate('Home')} 
      style={{ 
        backgroundColor: '#AD40AF', 
        justifyContent: 'space-between', 
        width: '90%', 
        flexDirection: 'row',
        padding:20,
        borderRadius:8,
        marginBottom:50
        }}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'#fff'}}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  con: {

  }
});


