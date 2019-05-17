import React, { Component } from 'react';
import {Router,Scene,Stack} from 'react-native-router-flux';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';

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
