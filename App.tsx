/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeStack from './navigation/HomeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NormalGreenBtn from './components/NormalGreenBtn';
import AuthLogin from './pages/AuthLogin';


function App(): JSX.Element {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [hadZipCode, setHadZipCode] = useState(false);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
        {!isLogedIn ? (
          <>
            <AuthLogin setIsLogedIn={setIsLogedIn} />
          </>
        ) : (
          <>
            <HomeStack />
          </>
        )}
    </SafeAreaView>
  );
}

export default App;
