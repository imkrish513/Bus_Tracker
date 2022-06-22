import React from 'react'
import {View, Image, StyleSheet, Text, TextInput} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry})=>{
    return(
        <View style = {styles.container}>
            <TextInput    style = {styles.input}
            value={value}
            onChangeText = {setValue}
             placeholder= {placeholder}
             secureTextEntry = {secureTextEntry}
          />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width: '90%',
        height:'10%',
        borderColor:"#e8e8e8",
        borderWidth:1,
        borderRadius:5,

        paddingHorizontal:10,
        marginVertical:10,
        
    },
    input:{
    
            height: 40,
            width: 250,
            borderRadius: 5,
    }
})

export default CustomInput;