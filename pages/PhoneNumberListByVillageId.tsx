import {StyleSheet, Text, View, ToastAndroid, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';
import { getPhoneNumbersByVillageIdAPI } from '../actions/apis';
import ContactListRow from '../components/ContactListRow';

const PhoneNumberListByVillageId = ({route, navigation}) => {

	const showToaster = (message: any) => {ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.CENTER,25,50,);}
	const [phoneNumbers, setPhoneNumbers] = useState([]);
	const [villageName, setVillageName] = useState('');

	const fetchPhones = async () => {
		await getPhoneNumbersByVillageIdAPI(route.params.selectedVillageId).then(res=>{
			if(res.data.status === "success"){
				setPhoneNumbers(res.data.data);
				setVillageName(res.data.villageName);
			}else showToaster(res.data.message);
		}).catch(err=>showToaster(err.message));
	}

	useEffect(() => {
		fetchPhones();
	}, [])
	
  
  return (
			<View style={styles.main}>
				<ContactListRow row1="" row2={`गाँव: ${villageName}`} row3="" isHead={true} hasOneRow={true} />
				<ContactListRow row1="नाम" row2="फ़ोन" row3="व्यवसाय" isHead={true} />
					<ScrollView>
						{phoneNumbers.map(phone=><ContactListRow key={phone.id} row1={phone.name} row2={phone.phone} row3={phone.occupation}/>)}
					</ScrollView>
			</View>
  );
};

export default PhoneNumberListByVillageId;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#EDF1F0',
  },
  text: {
    color: 'black',
  },
});
