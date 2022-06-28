import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import Logo from '../../../../assets/images/Logo.png'
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();
  const OnSignInPressed = () => {
      console.warn("Sign In Pressed")
  }

  const OnForgotPressed = () => {
      console.warn("Forgot Password Pressed")
  }

  const OnSignInGooglePressed = () => {
      console.warn("Sign In with google")
  }
  const OnCreateAccountPressed = () => {
      console.warn("Create an account")
  }
  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        secureTextEntry={false}
        color = '#8e8e8e'
      />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        color = '#8e8e8e'
      />

      <CustomButton 
      text = "Sign In"
      onPress = {OnSignInPressed}
      type = 'PRIMARY'
      />

      <CustomButton 
      text = "Forgot Password?"
      onPress = {OnForgotPressed}
      type = 'TERTIARY'
      />

       <CustomButton 
      text = "Sign In with Google"
      onPress = {OnSignInGooglePressed}
      bgColor = "#FAE9EA"
      fgcolor = "#DD4D44"
      />

       <CustomButton 
      text = "Don't have an account? Create one"
      onPress = {OnCreateAccountPressed}
      type = 'SECONDARY'
      />


    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 300,
  },
});

export default SignInScreen;
