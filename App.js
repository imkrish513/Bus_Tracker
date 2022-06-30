import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SignInScreen from './Src/Screens/Authentication/Sign_In/SignInScreen';
import SignUpScreen from './Src/Screens/Authentication/Sign_Up/SignUpScreen';
import HomeScreen from './Src/Screens/Home/HomeScreen';
import Code from './Src/Screens/Authentication/BusCode/BusCode'
import ForgotPassword from './Src/Screens/Authentication/Forgot_Password/forgotPassword';
import NewPassword from './Src/Screens/Authentication/NewPassword';
import Home from './Src/Screens/Home';
const App = ()=> {
  return (
    <SafeAreaView style={styles.container}>
     <Code />
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