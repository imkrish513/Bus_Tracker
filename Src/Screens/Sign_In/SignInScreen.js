import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/Logo.png'
import CustomInput from '../../Components/CustomInput'


const SignInScreen = () =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {height} = useWindowDimensions();

    return(
        <View style = {styles.root}>

        <Image
        source={Logo} 
        style = {[styles.logo,{height:height*0.3}]} 
        resizeMode = "contain" 
        />

        <CustomInput
          placeholder="Username"
          value = {username} 
          setValue = {setUsername}
          secureTextEntry = {false} 
        />

        <CustomInput 
          placeholder = "Password" 
          value={password} 
          setValue = {setPassword} 
          secureTextEntry = {true} 
        />

        </View>

    )
}
const styles = StyleSheet.create({
    root:{
    alignItems:'center',
    padding:10,
    },
    logo:{
        width:'70%',
        maxHeight:200,
        maxWidth:300,
    },
});

export default SignInScreen