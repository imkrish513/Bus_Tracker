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
  <View style = {styles.container}>
    <Text style = {styles.logout}>Home Screen</Text>
    <CustomButton 
      text = "Log Out"
      onPress = {HelpMe}
      type = 'PRIMARY'
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#c4f3ff',
    alignItems:'center',
  },
  logout: {
    fontSize:24,
    
    marginBottom:30,
    fontWeight:'bold',
    color:'#051C60',
    margin:10
  }
})
  
export default HomeScreen