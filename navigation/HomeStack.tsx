import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, ToastAndroid } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  // const showToaster = (message: any) => {ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.CENTER,25,50,);}

  return (
    <View style={styles.superMain} >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            tabBarHideOnKeyboard: true,
            headerTitle: "",
            tabBarIcon: ({ focused, color, size }) => {
              let iconName='home';
              if (route.name === 'Shops') {
                iconName = 'store';
              } else if (route.name === 'Search') {
                iconName = 'magnify';
              } else if (route.name === 'Meetings') {
                iconName = 'video';
              } else if (route.name === 'Account') {
                iconName = 'account-circle';
              }
              return <MaterialCommunityIcons name={iconName} color={focused ? 'black' : 'gray'} size={size} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Home'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  headerLeft: {
    width: 170,
    // backgroundColor: 'red',
  },
  headerRight: {
    width: 170,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 10
  },
  topBarZipcode: {
    color: 'black'
  },
  superMain: {
    height: "100%"
  },
  zipBox: {
    position: "absolute",
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zipBoxInner: {
    minHeight: 40,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  input: {
    height: 40,
    // width: "100%",
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderColor: 'black',
    marginBottom: 20,
  },
  profileUrlStyle: {
    width: 20, 
    height: 20, 
    borderRadius: 10, 
    borderColor: 'black', 
    borderWidth:1
  }
})