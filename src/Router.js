import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import {Router,Scene,Stack,Actions} from 'react-native-router-flux';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Main from './components/Main';

export default class componentName extends Component {
  
  render() {
    return (
      <Router
        sceneStyle={styles.container}
      >
          <Stack key='root' hideNavBar={true}>
            <Scene key="signin"
                   component={SignIn}
                   initial
            />
             <Scene key="signup"
                   component={SignUp}
                   
            />
             <Scene key="forgotpassword"
                   component={ForgotPassword}
            />
             <Scene key="main"
                   component={Main}
            />
          </Stack>
      </Router>
    );
  }
}

const styles={
    container:{
        flex:1,
        backgroundColor:'#F5F6F7'
    }
}
