import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';

const PhoneNumberListByVillageId = ({route, navigation}) => {

	const [phoneNumbers, setPhoneNumbers] = useState([]);
  
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{route.params.selectedVillageId}</Text>
    </View>
  );
};

export default PhoneNumberListByVillageId;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDF1F0',
  },
  text: {
    color: 'black',
  },
});
