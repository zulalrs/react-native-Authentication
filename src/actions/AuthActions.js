import {SIGN_UP,SIGN_IN,GET_USER} from './types';
import axios from 'axios';
import {Alert,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';

export const sendId=({uid})=>{
    return(dispatch)=>{
        if(uid!==''){
            axios({
                method:'post',
                url:'https://authentication-function-app.firebaseapp.com/auth',
                data:{uid}
            }).then(response=>{
                console.warn(uid)
                console.log('ID status'+response.data.status)
                if(response.data.status){
                    Actions.main({type:'reset'})
                }
            }).catch(error=>{
                console.warn('Hata: '+error);
            });
        }
    }
}
export const signIn=({email,password})=>{
    return(dispatch)=>{
        if(validateEmail(email)){
            if(email!=='' && password !==''){
                axios({
                    method:'post',
                    url:'https://authentication-function-app.firebaseapp.com/login',
                    data:{
                        email,
                        password
                    }
                }).then(response=>{
                    console.log('Login işlemi '+ response.data.status);
                    if(response.data.status){
                        Actions.main({type:'reset'})
                        console.warn(response.data.user_info.uid);
                        const uid=response.data.user_info.uid
                        AsyncStorage.setItem('data',JSON.stringify(uid));
                        dispatch({
                            type:GET_USER,
                            payload:uid
                        });
                    }
                    else{
                        Alert.alert('Kullanıcı bulunamadı.')
                    }
                }).catch(error=>{
                    console.warn('Hata: '+error);
                    Alert.alert('Kullanıcı bilgileri hatalı')
                });
            }
            else{
                Alert.alert('Lütfen bütün alanları doldurunuz.')
            }
        }
        else{
            Alert.alert('Lütfen doğru bir email adresi giriniz.')
        }
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

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}