import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import Logo from '../../../../assets/images/Logo.png'
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const SignInScreen = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const { height } = useWindowDimensions();

  const {control,handleSubmit,formState:{errors}} = useForm();


  const OnSignInPressed = (data) => {
    console.log(data)
      //validate the mans
      navigation.navigate('HomeScreen')
  }

  const OnForgotPressed = () =>  {
      navigation.navigate('ForgotPassword')
  } 

  const OnSignInGooglePressed = () => {
      console.warn("Sign In with google")
  }
  const OnCreateAccountPressed = () => {
      navigation.navigate('SignUpScreen')
  }
  return (
    <ScrollView showsVerticalScrollIndicator = {false} style = {{backgroundColor:'#c4f3ff'}}>
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />

      <CustomInput
        name= 'username'
        placeholder="Username"
        rules={{required:'Username is required'}}
        control={control}
        secureTextEntry={false}
        color = '#8e8e8e'
      />

      <CustomInput
        name= "password"
        placeholder="Password"
        rules={{required:'Password is required'}}
        //For min or max length minLength:{Value:3,message:'die }
        control={control}
        secureTextEntry={true}
        color = '#8e8e8e'
      />

    



      <CustomButton 
      text = "Sign In"
      onPress = {handleSubmit(OnSignInPressed)}
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
    backgroundColor:'#c4f3ff'
  },
  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 300,
  },
});

export default SignInScreen;
