import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SignUpScreen from '../Screens/Authentication/Sign_Up/SignUpScreen'
import SignInScreen from '../Screens/Authentication/Sign_In/SignInScreen'
import Code from '../Screens/Authentication/BusCode/BusCode'
import ForgotPassword from '../Screens/Authentication/Forgot_Password/forgotPassword'
import NewPassword from '../Screens/Authentication/NewPasswordScreen/newPassword'
import HomeScreen from '../Screens/Home/HomeScreen';

const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: '#c4f3ff',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

const Navigation = ()=> {
  return (
  <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "SignInScreen" component={SignInScreen}/>
        <Stack.Screen name = "SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name = "ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name = "NewPassword" component={NewPassword}/>
        <Stack.Screen name = "BusCode" component={Code}/>
        <Stack.Screen name = "HomeScreen" component={HomeScreen}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#c4f3ff'
  },
})
  
export default Navigation