import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

  const fetchData = async () => {

    let token;
    let canCheckList;
    let canAddNumber;
    let canCreateUser;
    let canCheckUsers;
    try {
      token = await AsyncStorage.getItem('@token')
    } catch (e) {"token problem: ", console.log(e)};
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

    console.log(token);
    console.log(canCheckList==='true');
    console.log(canAddNumber==='true');
    console.log(canCreateUser==='true');
    console.log(canCheckUsers==='true');

  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})