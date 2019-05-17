import React, { Component } from 'react';
import {View,Image,Dimensions, TextInput,Text,TouchableOpacity} from 'react-native';

const {width,height}=Dimensions.get('window');
const w=width*0.56;
const h=height*0.086;
class SignIn extends Component {
  render() {
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
            />
            <TextInput
            style={styles.inputEmailStyle}
            placeholder='Password'
            placeholderTextColor='#979899'
            />
            <Text style={styles.textStyle}>Forgot password?</Text>
          </View>
          
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{color:'#fff',fontFamily:'SFUIDisplay-Bold'}}>SIGN IN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view3Style}>
          <Text style={{color:'#505050'}}>Don't have an account?</Text>
          <Text style={{color:'#FF7260',marginBottom:12}}>Create new account</Text>
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

export default SignIn;