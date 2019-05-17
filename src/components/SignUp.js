import React, { Component } from 'react';
import {Text,TextInput,View,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {signUp} from '../actions';
import { Actions } from 'react-native-router-flux';

const {width,height}=Dimensions.get('window');
class SignUp extends Component {
  state={
    nameS:'',
    surnameS:'',
    usernameS:'',
    passwordS:'',
    emailS:'',
    phoneNumberS:''
  }
  register(){
    const data={
      name:this.state.nameS,
      surname:this.state.surnameS,
      user_name:this.state.usernameS,
      email:this.state.emailS,
      password:this.state.passwordS,
      phoneNumber:this.state.phoneNumberS
    }
    this.props.signUp(data);
  }
  render() {
    const {nameS,surnameS,usernameS,emailS,phoneNumberS,passwordS}=this.state
    return (
      <View style={{flex:1}}>
        <View style={styles.iconStyle}>
          <Icon onPress={()=>Actions.replace('signin')} color={'#5B5A5A'} name={'close'} size={30} />
        </View>
        <View style={{flex:9,justifyContent:'space-between', alignItems: 'center'}}>
          <Text style={styles.titleStyle}>{'CREATE NEW \nACCOUNT'}</Text>

          <View>
            <View style={{flexDirection:'row'}}>
              <TextInput
              style={{width:width*0.768/2,height:height*0.075,borderWidth:1,borderColor:'#cfd0d1',  borderTopLeftRadius: 5,fontFamily:'SFUIDisplay-Light'}}
              placeholder='Name'
              placeholderTextColor='#979899'
              onChangeText={(text)=>this.setState({nameS:text})}
              value={nameS}
              />
              <TextInput
              style={{width:width*0.768/2,height:height*0.075,borderWidth:1,borderColor:'#cfd0d1',  borderTopRightRadius:5,fontFamily:'SFUIDisplay-Light'}}
              placeholder='Surname'
              placeholderTextColor='#979899'
              onChangeText={(text)=>this.setState({surnameS:text})}
              value={surnameS}
              />
            </View>

            <TextInput
            style={styles.inputStyle}
            placeholder='Username'
            placeholderTextColor='#979899'
            onChangeText={(text)=>this.setState({usernameS:text})}
            value={usernameS}
            />
            <TextInput
            style={styles.inputStyle}
            placeholder='Email'
            placeholderTextColor='#979899'
            onChangeText={(text)=>this.setState({emailS:text})}
            value={emailS}
            />
            <TextInput
            style={styles.inputStyle}
            secureTextEntry
            placeholder='Password'
            placeholderTextColor='#979899'
            onChangeText={(text)=>this.setState({passwordS:text})}
            value={passwordS}
            />
            <TextInput
            style={styles.inputPhone}
            placeholder='Phone Number'
            placeholderTextColor='#979899'
            onChangeText={(text)=>this.setState({phoneNumberS:text})}
            value={phoneNumberS}
            />
            <Text style={styles.textStyle}>{'By tapping \"Sign Up" you agree \nto the '}
              <Text style={ {color:'#FF7260'}}>{'terms & conditions'}</Text>
            </Text>
          </View>
          
          <TouchableOpacity style={styles.buttonStyle} onPress={this.register.bind(this)}>
            <Text style={{color:'#fff',fontFamily:'SFUIDisplay-Bold'}}>CREATE NEW ACCOUNT</Text>
          </TouchableOpacity>
        </View>

        </View>
     
    );
  }
}

const styles={
  iconStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
    paddingLeft:10
  },
  titleStyle:{
    textAlign:'center',
    color:'#5B5A5A', 
    fontSize:20,
    fontFamily:'SFUIDisplay-Regular',
    marginTop:10
  },
  inputStyle:{
    width:width*0.768,
    height:height*0.075,
    borderWidth:1,
    borderColor:'#cfd0d1',
    fontFamily:'SFUIDisplay-Light'
  },
  inputPhone:{
    width:width*0.768,
    height:height*0.075,
    borderWidth:1,
    borderColor:'#cfd0d1',  
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
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
    alignItems:'center',
    marginBottom:25
  },
  textStyle:{
    width:width*0.768, 
    marginTop:5,
    textAlign:'center',
    color: '#5b5a5a',
    fontFamily:'SFUIDisplay-Light'
  }
}

const mapStateToProps=({registerResponse})=>{
  return {data:registerResponse.data}
}
export default connect(mapStateToProps,{signUp})(SignUp);
