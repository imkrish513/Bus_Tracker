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

const NewPassword = () => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');


  const OnSubmitPressed = () => {
      console.warn("Sign In Pressed")
  }

  const OnRememberPressed = () => {
    console.warn("Back to Sign In")
}
  
  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
    <View style={styles.root}>
      <Text style  = {styles.title}>
        Reset Your Password
      </Text>

      <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
        secureTextEntry={false}
        color = '#8e8e8e'
      />

        <CustomInput
        placeholder="Enter your new password"
        value={password}
        setValue={setPassword}
        secureTextEntry={false}
        color = '#8e8e8e'
      />


      <CustomButton 
      text = "Submit"
      onPress = {OnSubmitPressed}
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
  },
  law:{
    color:'gray',
    marginVertical:10,

  },
  link:{
    color:'#FDB075'
  },
  title: {
    fontSize:24,
    marginBottom:30,
    fontWeight:'bold',
    color:'#051C60',
    margin:10
  },
});

export default NewPassword;