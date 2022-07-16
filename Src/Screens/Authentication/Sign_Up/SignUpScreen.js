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
import { useForm, Controller } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const SignUpScreen = () => {
 // const [username, setUsername] = useState('');
 // const [email, setEmail] = useState('');
 // const [password, setPassword] = useState('');
 // const [passwordR, setPasswordR] = useState('');
  const navigation = useNavigation();

  const {control,handleSubmit, watch} = useForm();
  const pwd = watch('Password');

  const OnSignInPressed = () => {
      navigation.navigate('SignInScreen')
  }
  const OnSignInGooglePressed = () => {
      console.warn("Sign In with google")
  }
  const OnRegisterPressed = () => {
      navigation.navigate('HomeScreen')
  }
  const Onterms = () => {
      console.warn("Terms of Conditions")
  }
  const Onprivacy = () => {
      console.warn("Privacy Policy")
  }
  
  return (
    <ScrollView showsVerticalScrollIndicator = {false} style = {{backgroundColor:'#c4f3ff'}}>
    <View style={styles.root}>
      <Text style  = {styles.title}>
        Create an account
      </Text>

       <CustomInput
        name= 'username'
        placeholder="Username"
        rules={{required:'Username is required',
        minLength:{value:3, message:'Username should be a minimum of 3 characters long'},
        maxLength:{value:20, message:'Username should be a maximum of 20 characters long'}
        }}
        control={control}
        secureTextEntry={false}
        color = '#8e8e8e'
      />

       <CustomInput
        name= 'Email'
        placeholder="Email"
        rules={{required:'Email is required',pattern:{value:EMAIL_REGEX,message:'Email is Invalid'}}}
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
      text = "Register"
      onPress = {handleSubmit(OnRegisterPressed)}
      type = 'PRIMARY'
      />

      <Text style = {styles.law}> 
      By registering, you confirm that you accept our{' '}
      <Text style = {styles.link} onPress = {Onterms}>Terms of Use</Text> and{' '}
      <Text style = {styles.link} onPress = {Onprivacy}>Privacy Policy</Text>
      </Text>


       <CustomButton 
      text = "Sign Up with Google"
      onPress = {OnSignInGooglePressed}
      bgColor = "#FAE9EA"
      fgcolor = "#DD4D44"
      />

       <CustomButton 
      text = "Have an account? Sign in"
      onPress = {OnSignInPressed}
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

export default SignUpScreen;