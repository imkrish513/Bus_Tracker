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
import {useForm} from 'react-hook-form'

const NewPassword = () => {
 // const [code, setCode] = useState('');
 // const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {control,handleSubmit,watch} = useForm();

const pwd = watch('Password');
  const OnSubmitPressed = () => {
      navigation.navigate('HomeScreen')
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
        name = 'Code'
        placeholder="Enter your confirmation code"
        rules={{required:'Confirmation code is required'}}
        control={control}
        secureTextEntry={false}
        color = '#8e8e8e'
      />

        <CustomInput
        name= 'Password'
        placeholder="Password"
        rules={{required:'Password is required',
        minLength:{value:8, message:'Password should be a minimum of 8 characters long'}
      }}
        control={control}
        secureTextEntry={true}
        color = '#8e8e8e'
      />

       <CustomInput
        name= 'RPassword'
        placeholder="Repeat Password"
        rules={{
        validate:value => value == pwd || 'Password does not match',
        }}
        control={control}
        secureTextEntry={true}
        color = '#8e8e8e'
      />  


      <CustomButton 
      text = "Submit"
      onPress = {handleSubmit(OnSubmitPressed)}
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