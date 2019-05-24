import React, { Component } from 'react';
import {Text,Dimensions,View,TextInput,TouchableOpacity} from 'react-native';

const {width,height}=Dimensions.get('window');
class ForgotPassword extends Component {
  state={
    email:''
  }
  render() {
    const {email}=this.state
    return (
      <View style={{flex:1,justifyContent:'center',alignItems: 'center', backgroundColor:''}}>
        <TextInput
        style={styles.inputEmailStyle}
        placeholder='Email'
        placeholderTextColor='#979899'
        onChangeText={(text)=>this.setState({email:text})}
        value={email}
        />
       
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{color:'#fff',fontFamily:'SFUIDisplay-Bold'}} >SEND</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
const styles={
    inputEmailStyle:{
    width:width*0.768,
    height:height*0.075,
    borderWidth:1,
    borderColor:'#cfd0d1', 
    borderRadius:5,
    marginBottom:20,
    fontFamily:'SFUIDisplay-Light'
  },
  buttonStyle:{
    backgroundColor:'#129793',
    borderWidth:1,
    borderColor:'#cfd0d1',
    width:width*0.768,
    height:height*0.075,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  }
}

export default ForgotPassword;
