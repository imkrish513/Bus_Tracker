import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton'
const BusIdentifier = () => {
  const [busid, setBusid] = useState('');

const OnBusIDEntered = () => {
    console.warn("Bus Value Entered")
}
  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
    <View style={styles.root}>
      <Text style  = {styles.title}>
        Enter Bus id
      </Text>

      <CustomInput
        placeholder="busid"
        value={busid}
        setValue={setBusid}
        secureTextEntry={false}
        color = '#8e8e8e'
      />
       <CustomButton 
      text = "Enter"
      onPress = {OnBusIDEntered}
      type = 'PRIMARY'
      />
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
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
    marginBottom:10,
    fontWeight:'bold',
    color:'#051C60',
    margin:100
  },
});

export default BusIdentifier;