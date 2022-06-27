import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SignInScreen from './Src/Screens/Sign_In/SignInScreen';
import SignUpScreen from './Src/Screens/Sign_Up/SignUpScreen';

const App = ()=> {
  return (
    <SafeAreaView style={styles.container}>
     <SignInScreen />
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