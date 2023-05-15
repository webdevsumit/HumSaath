import { StyleSheet, Text, TextInput, View, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import VillageSelection from '../components/VillageSelection';
import NormalGreenBtn from '../components/NormalGreenBtn';

const PhoneNumberList = ({ navigation }) => {

  const [selectedVillageId, setSelectedVillageId] = useState(null);
  const showToaster = (message: any) => {ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.CENTER,25,50,);}

  return (
    <View style={styles.main}>
      <View style={styles.whiteWrapper}>
        <VillageSelection selectedVillageId={selectedVillageId} setSelectedVillageId={setSelectedVillageId} />
        {!!selectedVillageId && <View style={styles.buttonView}>
          <NormalGreenBtn text="गांवों की सूची प्राप्त करें" onPress={()=>navigation.navigate('phoneNumberListByVillageId', { selectedVillageId })} bgColor="#4681f4" />
        </View>}
      </View>
    </View>
  )
}

export default PhoneNumberList

const styles = StyleSheet.create({
  main: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDF1F0'
  },
  text: {
    color: 'black'
  },
  whiteWrapper: {
    backgroundColor:'white',
    width: '80%',
    minHeight: 50,
    borderRadius: 10,
    padding: 20
  },
})