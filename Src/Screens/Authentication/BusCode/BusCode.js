import react from 'react';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput} from 'react-native';
import Dialog from "react-native-dialog";

export default class Bcode extends react.Component {

  state = {
    dialogVisible: false
  };
  
  showDialog = () => {
   this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  handleDelete = () => {
    
    this.setState({ dialogVisible: false });
  };

   
  render(){
    
    return (
      
      <View style = {styles.container}>
        <TouchableOpacity onPress={this.showDialog}>
          <Text>Show Dialog</Text>
        </TouchableOpacity>
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Enter the Code</Dialog.Title>
          <TextInput 
              editable = {true}
              placeholder = "Bus Code"
              
              style = {{
                height: 50,
                width: 250,
                borderRadius: 5,
                color:'#8e8e8e',
                backgroundColor:'white',
                borderColor:"#e8e8e8",
                borderWidth:1,
                borderRadius:5,
                paddingHorizontal:7,
                marginVertical:10,
                marginLeft:7
               
              }}
            /> 
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
          <Dialog.Button label="Submit" onPress={this.handleDelete} />
        </Dialog.Container>
      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#c4f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
