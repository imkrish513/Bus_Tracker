import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Amplify } from 'aws-amplify'
import awsconfig from './Src/aws-exports'
import Navigation from './Src/Navigation';


Amplify.configure(awsconfig)





const App = ()=> {
  return (
    <SafeAreaView style={styles.container}>
     <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#c4f3ff'
  },
})
  
export default App