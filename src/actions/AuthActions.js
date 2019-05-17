import {SIGN_UP,SIGN_IN} from './types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const signIn=({email,password})=>{
    return(dispatch)=>{
        axios({
            method:'post',
            url:'https://authentication-function-app.firebaseapp.com/login',
            data:{
                email,
                password
            }
        }).then(response=>{
            console.log('Login işlemi '+ response.data.status);
        }).catch(error=>{
            console.warn('Hata: '+error);
        });
    }
}

export const signUp=(param)=>{
    return(dispatch)=>{
        axios({
            method:'post',
            url:'https://authentication-function-app.firebaseapp.com/register',
            data:param
        }).then(response=>{
            console.log('Giden data '+ response.data);
            Actions.replace('signin');
        }).catch(error=>{
            console.warn('Hata: '+error);
        });
    }
}