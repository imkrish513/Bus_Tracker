import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SignInScreen from './Src/Screens/Sign_In/SignInScreen';
import SignUpScreen from './Src/Screens/Sign_Up/SignUpScreen';
import HomeScreen from './Src/Screens/Home/HomeScreen'
import BusCode from './Src/Screens/Home/BusCode'
const App = ()=> {
  return (
    <SafeAreaView style={styles.container}>
<<<<<<< Updated upstream
     <BusCode />
=======
     <SignUpScreen />
>>>>>>> Stashed changes
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#c4f3ff'
  },
})
  
export default App