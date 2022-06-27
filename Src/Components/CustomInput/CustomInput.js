import React from 'react'
import {View, Image, StyleSheet, Text, TextInput} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry, color})=>{
    return(
        <View style = {styles.container}>
            <TextInput   
            style = {styles.input}
            value={value}
            onChangeText = {setValue}
             placeholder= {placeholder}
             placeholderTextColor = {color}
             secureTextEntry = {secureTextEntry}
          />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width: '90%',
        borderColor:"#e8e8e8",
        borderWidth:1,
        borderRadius:5,
        placeholderTextColor:'black',
        paddingHorizontal:7,
        marginVertical:10,
        
    },
    input:{
    
            height: 50,
            width: 250,
            borderRadius: 5,
            color:'#8e8e8e'
           
    }
})

export default CustomInput;