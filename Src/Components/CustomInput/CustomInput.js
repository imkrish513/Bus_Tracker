import React from 'react'
import {View, Image, StyleSheet, Text, TextInput} from 'react-native'
import { Controller } from 'react-hook-form'
import reactDom from 'react-dom'

const CustomInput = ({ 
    control,
    rules = {},
    name,
    placeholder,
    secureTextEntry,
    color})=>{
    return(
       
            <Controller 
                control={control}
                style = {styles.input}
                rules = {rules}
                name = {name}
                render={({field:{value,onChange,onBlur}, fieldState:{error}}) =>(
                  <>
                    <View style = {[styles.container,{borderColor: error ? 'red': "#e8e8e8" }]}>    
                        <TextInput
                         value = {value}
                         placeholderTextColor = {color}
                         onChangeText = {onChange}
                         onBlur={onBlur}
                         secureTextEntry = {secureTextEntry}
                         placeholder={placeholder} 
                    />
                    </View>
                    {error && (
                      <Text style = {{color:'red',alignSelf:'stretch',}}>{error.message ||'Error'}</Text>)}
                  </>
                )}  
            />
       
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width: '90%',
        borderColor:"#e8e8e8",
        borderWidth:1,
        borderRadius:5,
        paddingVertical:15,
        placeholderTextColor:'black',
        paddingHorizontal:7,
        marginVertical:10, 
        
    },
    input:{
    
            height: 70,
            width: 250,
            borderRadius: 5,
            color:'#8e8e8e'
           
    }
})

export default CustomInput;