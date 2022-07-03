import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = ()=> {
  const navigation = useNavigation();
  const HelpMe = () => {
    navigation.navigate('SignInScreen')
}
  return (
  <View>
    <Text>hi</Text>
    <CustomButton 
      text = "Register"
      onPress = {HelpMe}
      type = 'PRIMARY'
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#c4f3ff'
  },
})
  
export default HomeScreen