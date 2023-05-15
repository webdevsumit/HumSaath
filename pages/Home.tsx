import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import NormalGreenBtn from '../components/NormalGreenBtn';
import RNRestart from 'react-native-restart'; 

const Home = ({ navigation }) => {

  const [checkList, setCheckList] = useState(false);
  const [addNumber, setAddNumber] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const [checkUsers, setCheckUsers] = useState(false);

  const fetchData = async () => {

    let canCheckList;
    let canAddNumber;
    let canCreateUser;
    let canCheckUsers;

    try {
      canCheckList = await AsyncStorage.getItem('@canCheckList')
    } catch (e) {"canCheckList problem: ", console.log(e)};
    try {
      canAddNumber = await AsyncStorage.getItem('@canAddNumber')
    } catch (e) {"canAddNumber problem: ", console.log(e)};
    try {
      canCreateUser = await AsyncStorage.getItem('@canCreateUser')
    } catch (e) {"canCreateUser problem: ", console.log(e)};
    try {
      canCheckUsers = await AsyncStorage.getItem('@canCheckUsers')
    } catch (e) {"canCheckUsers problem: ", console.log(e)};

    setCheckList(canCheckList==='true');
    setAddNumber(canAddNumber==='true');
    setCreateUser(canCreateUser==='true');
    setCheckUsers(canCheckUsers==='true');

  }

  useEffect(()=>{
    fetchData();
  },[])

  const logout = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log(e);
    }
    await GoogleSignin.signOut();
    RNRestart.restart();
  }

  return (
    <View style={styles.mainOuter}>
      <Image style={styles.logo} source={require('./../assets/logo.png')} />
      {checkList &&
        <View style={styles.buttonView}>
          <NormalGreenBtn text="फ़ोन नंबर की सूची" onPress={()=>navigation.navigate('phoneNumberList')} bgColor="#4681f4" />
        </View>
      }
      {addNumber && 
        <View style={styles.buttonView}>
          <NormalGreenBtn text="नया फ़ोन नंबर जोड़ें" onPress={()=>navigation.navigate('phoneNumberList')} bgColor="#4681f4" />
        </View>
      }
      {createUser && 
        <View style={styles.buttonView}>
          <NormalGreenBtn text="नया उपयोगकर्ता बनाएँ" onPress={()=>navigation.navigate('phoneNumberList')} bgColor="#4681f4" />
        </View>
      }
      {checkUsers && 
        <View style={styles.buttonView}>
          <NormalGreenBtn text="उपयोगकर्ताओं की सूची" onPress={()=>navigation.navigate('phoneNumberList')} bgColor="#4681f4" />
        </View>
      }
      <View style={styles.buttonView}>
        <NormalGreenBtn text="लॉग आउट" onPress={logout} bgColor="red" />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainOuter: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  buttonView: {
    width: '80%',
    marginVertical: 10
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: "10%"
  }
})