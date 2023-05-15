import { StyleSheet, Text, TextInput, View, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import NormalGreenBtn from '../components/NormalGreenBtn'
import { checkAuthAPI, login } from '../actions/apis'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthLogin = ({ setIsLogedIn }) => {

  const showToaster = (message: any) => {ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.CENTER,25,50,);}

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const onPhoneChange = (val: any) => {
    setData({...data, email: val})
  }
  const onZipCodeChange = (val: any) => {
    setData({...data, password: val})
  } 

  const onSubmit = async () => {
    if(!data.email){
      showToaster("कृपया ईमेल डालें।");
      return;
    }
    if(!data.password){
      showToaster("कृपया पासवर्ड डालें।");
      return;
    }

    await login(data).then(async (res)=>{
      if(res.data.status === "success"){
        try {
          await AsyncStorage.setItem('@token', res.data.token)
        } catch (e) {"token problem: ", console.log(e)};
        try {
          await AsyncStorage.setItem('@canCheckList', `${res.data.canCheckList}`)
        } catch (e) {"token problem: ", console.log(e)};
        try {
          await AsyncStorage.setItem('@canAddNumber', `${res.data.canAddNumber}`)
        } catch (e) {"token problem: ", console.log(e)};
        try {
          await AsyncStorage.setItem('@canCreateUser', `${res.data.canCreateUser}`)
        } catch (e) {"token problem: ", console.log(e)};
        try {
          await AsyncStorage.setItem('@canCheckUsers', `${res.data.canCheckUsers}`)
        } catch (e) {"token problem: ", console.log(e)};
        setIsLogedIn(true);
      }else{
        showToaster(res.data.message);
      }
    }).catch(err=>showToaster(err.message));
  }
  
  const checkAuth = async () => {
    await checkAuthAPI().then(async (res)=>{
      if(res.data.status === "success"){
        try {
          await AsyncStorage.setItem('@canCheckList', `${res.data.canCheckList}`)
        } catch (e) {"token problem: ", console.log(e)};
        try {
          await AsyncStorage.setItem('@canAddNumber', `${res.data.canAddNumber}`)
        } catch (e) {"token problem: ", console.log(e)};
        try {
          await AsyncStorage.setItem('@canCreateUser', `${res.data.canCreateUser}`)
        } catch (e) {"token problem: ", console.log(e)};
        try {
          await AsyncStorage.setItem('@canCheckUsers', `${res.data.canCheckUsers}`)
        } catch (e) {"token problem: ", console.log(e)};
        setIsLogedIn(true);
      }
    }).catch(err=>showToaster(err.message));
  }

  useEffect(() => {
    checkAuth();
  }, [])

  return (
    <View style={styles.mainOuter}>
      <View style={styles.main}>
        <View style={styles.wrapperView}>
          <Text style={styles.text}>ईमेल</Text>
          <TextInput
            style={styles.input}
            onChangeText={onPhoneChange}
            value={data.email}
            placeholder="Enter email."
            keyboardType="email-address"
            autoComplete='email'
            cursorColor='#555'
            inputMode='email'
            maxLength={254}
            placeholderTextColor='#aaa'
          />
        </View>
        <View style={{...styles.wrapperView, marginBottom: 30}}>
          <Text style={styles.text}>पासवर्ड</Text>
          <TextInput
            style={styles.input}
            onChangeText={onZipCodeChange}
            value={data.password}
            placeholder="Enter password."
            autoComplete='password'
            cursorColor='#555'
            secureTextEntry={true}
            maxLength={6}
            placeholderTextColor='#aaa'
          />
        </View>
        <NormalGreenBtn text="लॉग इन करें" onPress={onSubmit} bgColor="blue" />
      </View>
    </View>
  )
}

export default AuthLogin

const styles = StyleSheet.create({
  mainOuter: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF1F0'
  },
  main: {
    width: '85%',
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  wrapperView: {
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    padding: 0,
    color: 'black',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white'
  },
});