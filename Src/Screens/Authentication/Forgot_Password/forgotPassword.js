import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import CustomInput from '../../../Components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const ForgotPassword = () => {
  const navigation = useNavigation();

//  const [email, setEmail] = useState('');

  const {control,handleSubmit} = useForm();

  const OnSendPressed = () => {
      navigation.navigate('NewPassword')
  }

  const OnRememberPressed = () => {
    navigation.navigate('SignInScreen')
}

  
  return (
    <ScrollView showsVerticalScrollIndicator = {false} style = {{backgroundColor:'#c4f3ff'}}>
    <View style={styles.root}>
      <Text style  = {styles.title}>
        Reset Your Password
      </Text>

      <CustomInput
        name= 'Email'
        placeholder="Email"
        rules={{required:'Email is required',pattern:{value:EMAIL_REGEX,message:'Email is Invalid'}}}
        control={control}
        secureTextEntry={false}
        color = '#8e8e8e'
      />


      <CustomButton 
      text = "Send"
      onPress = {handleSubmit(OnSendPressed)}
      type = 'PRIMARY'
      />

     <CustomButton 
      text = "Back to Sign in"
      onPress = {OnRememberPressed}
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
    margin:10,
    backgroundColor:'#c4f3ff',
  },
  title: {
    fontSize:24,
    marginBottom:30,
    fontWeight:'bold',
    color:'#051C60',
    margin:10
  },
});

export default ForgotPassword;