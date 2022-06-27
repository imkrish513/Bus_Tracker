import React from 'react'
import {View, Image, StyleSheet, Text, TextInput, Pressable} from 'react-native'

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor,fgcolor})=>{
    return(
        <Pressable 
        onPress = {onPress} 
        style = {[styles.container, styles[`${type}`],
        bgColor ? {backgroundColor:bgColor} : {}

        ]}>

        <Text style = {[styles.container, styles[`text_${type}`],
        fgcolor ? {color:fgcolor}: {}
        ]}>
          {text}
        </Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    PRIMARY:{
      backgroundColor:"#3B71F3",
        width:'95%',
        padding:15,
        marginTop:15,
        marginVertical:10,
        alignItems:"center",

        borderRadius:5,
    },
    TERTIARY:{
        width:'95%',
        padding:15,
        marginVertical:10,
        alignItems:"center",

        borderRadius:5,
    },
    SECONDARY:{
        width:'95%',
        padding:15,
        marginVertical:45,
        alignItems:"center",

        borderRadius:5,
    },
    text_TERTIARY:{
      fontWeight:'bold',
      color:'#8e8e8e'
    },
    text_PRIMARY:{
      fontWeight:'bold',
      color:'white'
    },
     text_SECONDARY:{
      fontWeight:'bold',
      color:'#8e8e8e'
    },
})

export default CustomButton;