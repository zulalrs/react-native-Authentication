import React, { Component } from 'react';
import {View,Image,Dimensions, TextInput,Text,TouchableOpacity,AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {signIn,sendId} from '../actions';
import { Actions } from 'react-native-router-flux';

const {width,height}=Dimensions.get('window');
const w=width*0.56;
const h=height*0.086;
class SignIn extends Component {
  state={
    email:'',
    password:''
  }
  login(){
    const {email,password}=this.state;
    this.props.signIn({email,password});
  }
  componentWillMount(){
    // AsyncStorage.getItem('data').then(value=>{
    //   const uid=JSON.parse(value);
    //   console.warn(uid);
    //   this.props.sendId({uid});
    // });
  }
  render() {
    const {email,password}=this.state
    return (
      <View style={{flex:1}}>
        <View style={styles.view1Styes}>
          <Image source={require('../images/ico-logo.png')} style={styles.imageStyle}/>
         </View>
 
        <View style={styles.view2Style}>
          <Text style={styles.titleStyle}>WELCOME</Text>
          <View>
            <TextInput
            style={styles.inputEmailStyle}
            placeholder='Email'
            placeholderTextColor='#979899'
            onChangeText={(text)=>this.setState({email:text})}
            value={email}
            />
            <TextInput
            style={styles.inputPswStyle}
            secureTextEntry
            placeholder='Password'
            placeholderTextColor='#979899'
            onChangeText={(text)=>this.setState({password:text})}
            value={password}
            />
            <Text onPress={()=>Actions.replace('forgotpassword')} style={styles.textStyle}>Forgot password?</Text>
          </View>
          
          <TouchableOpacity style={styles.buttonStyle} onPress={this.login.bind(this)}>
            <Text style={{color:'#fff',fontFamily:'SFUIDisplay-Bold'}} >SIGN IN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view3Style}>
          <Text style={{color:'#505050'}}>Don't have an account?</Text>
          <Text onPress={()=>Actions.replace('signup')} style={{color:'#FF7260',marginBottom:20}}>Create new account</Text>
        </View>
      </View>
    );
  }
}

const styles={
  view1Styes:{
    flex:3,
    justifyContent: 'center',
    alignItems:'center'
  },
  view2Style:{
    flex:4.5,
    justifyContent: 'space-between',
    alignItems:'center'
  },
  view3Style:{
    flex:2.5,
    justifyContent: 'flex-end',
    alignItems:'center',
    fontFamily:'SFUIDisplay-Bold'
  },
  imageStyle:{
    width:w,
    height:h, 
    resizeMode:'stretch'
  },
  titleStyle:{
    color: '#5b5a5a',
    fontSize:25,
    fontFamily:'SFUIDisplay-Ultralight'
  },
  inputEmailStyle:{
    width:width*0.768,
    height:height*0.075,
    borderWidth:1,
    borderColor:'#cfd0d1', 
    borderTopLeftRadius:5,
    borderTopRightRadius: 5,
    fontFamily:'SFUIDisplay-Light'
  },
  inputPswStyle:{
    width:width*0.768,
    height:height*0.075,
    borderWidth:1,
    borderColor:'#cfd0d1',  
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    fontFamily:'SFUIDisplay-Light'
  },
  textStyle:{
    width:width*0.768, 
    marginTop:5,
    textAlign:'right',
    color: '#5b5a5a',  
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

const mapStateToProps=({authResponse})=>{
  const {email,password,uid}=authResponse;
  return {email,password,uid};
}
export default connect(mapStateToProps,{signIn,sendId})(SignIn);