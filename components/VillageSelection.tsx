import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React, { useState, useEffect } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { getButhOptionsAPI, getDistrictOptionsAPI, getSectorOptionsAPI, getStateOptionsAPI, getVidhanSabhaOptionsAPI, getVillageOptionsAPI } from '../actions/apis';

const VillageSelection = ({ selectedVillageId, setSelectedVillageId }) => {

	const [states, setStates] = useState([]);
	const [selectedStateObj, setSelectedStateObj] = useState(null);

	const [districts, setDistricts] = useState([]);
	const [selectedDistObj, setSelectedDistObj] = useState(null);

	const [vidhanSabhas, setVidhanSabhas] = useState([]);
	const [selectedVidhanSabhaObj, setSelectedVidhanSabhaObj] = useState(null);

	const [sectors, setSectors] = useState([]);
	const [selectedSectorObj, setSelectedSectorObj] = useState(null);

	const [buths, setBuths] = useState([]);
	const [selectedButhObj, setSelectedButhObj] = useState(null);

	const [villages, setVillages] = useState([]);
	const [selectedVillageObj, setSelectedVillageObj] = useState(null);

  const showToaster = (message: any) => {ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.CENTER,25,50,);}

  const fetchStates =  async () => {
    await getStateOptionsAPI().then(res=>{
      if(res.data.status === "success"){
        setStates(res.data.states);
      }else {
        showToaster(res.data.message);
      }
    }).catch(err=>showToaster(err.message));
  }

  const fetchDists =  async (id) => {
    await getDistrictOptionsAPI(id).then(res=>{
      if(res.data.status === "success"){
        setDistricts(res.data.districts);
      }else {
        showToaster(res.data.message);
      }
    }).catch(err=>showToaster(err.message));
  }

  const fetchVidhanSabhas =  async (id) => {
    await getVidhanSabhaOptionsAPI(id).then(res=>{
      if(res.data.status === "success"){
        setVidhanSabhas(res.data.VidhanSabhas);
      }else {
        showToaster(res.data.message);
      }
    }).catch(err=>showToaster(err.message));
  }

  const fetchSectors =  async (id) => {
    await getSectorOptionsAPI(id).then(res=>{
      if(res.data.status === "success"){
        setSectors(res.data.Sectors);
      }else {
        showToaster(res.data.message);
      }
    }).catch(err=>showToaster(err.message));
  }

  const fetchBuths =  async (id) => {
    await getButhOptionsAPI(id).then(res=>{
      if(res.data.status === "success"){
        setBuths(res.data.Buths);
      }else {
        showToaster(res.data.message);
      }
    }).catch(err=>showToaster(err.message));
  }

  const fetchVillages =  async (id) => {
    await getVillageOptionsAPI(id).then(res=>{
      if(res.data.status === "success"){
        setVillages(res.data.Villages);
      }else {
        showToaster(res.data.message);
      }
    }).catch(err=>showToaster(err.message));
  }

  useEffect(()=>{
      fetchStates();
  },[])
  
  return (
    <View>
      <View style={{...styles.wrapperView, marginBottom: 30}}>
        <Text style={styles.text}>राज्य</Text>
        <SelectDropdown
          data={states.map(st=>st.name)}
          onSelect={(selectedItem, index) => {
						if(states[index].name===selectedItem){
							setSelectedStateObj(states[index]);
							setDistricts([]);
							setSelectedDistObj(null);
							setVidhanSabhas([]);
							setSelectedVidhanSabhaObj(null);
							setSectors([]);
							setSelectedSectorObj(null);
							setBuths([]);
							setSelectedButhObj(null);
							setVillages([]);
							setSelectedVillageId(null);
							fetchDists(states[index].id);
						}else showToaster("गलती।")
          }}
					buttonTextStyle={{ color: 'black' }}
					buttonStyle={{borderRadius: 10}}
					defaultButtonText="राज्य चुनें।"
        />
      </View>
      {!!districts.length && <View style={{...styles.wrapperView, marginBottom: 30}}>
        <Text style={styles.text}>ज़िला</Text>
        <SelectDropdown
          data={districts.map(dt=>dt.name)}
          onSelect={(selectedItem, index) => {
						if(districts[index].name===selectedItem){
							setSelectedDistObj(districts[index]);
							setVidhanSabhas([]);
							setSelectedVidhanSabhaObj(null);
							setSectors([]);
							setSelectedSectorObj(null);
							setBuths([]);
							setSelectedButhObj(null);
							setVillages([]);
							setSelectedVillageId(null);
							fetchVidhanSabhas(districts[index].id);
						}else showToaster("गलती।")
          }}
					buttonTextStyle={{ color: 'black' }}
					buttonStyle={{borderRadius: 10}}
					defaultButtonText="ज़िला चुनें।"
        />
      </View>}
      {!!vidhanSabhas.length && <View style={{...styles.wrapperView, marginBottom: 30}}>
        <Text style={styles.text}>विधान सभा</Text>
        <SelectDropdown
          data={vidhanSabhas.map(vs=>vs.name)}
          onSelect={(selectedItem, index) => {
						if(vidhanSabhas[index].name===selectedItem){
							setSelectedVidhanSabhaObj(vidhanSabhas[index].id);
							setSectors([]);
							setSelectedSectorObj(null);
							setBuths([]);
							setSelectedButhObj(null);
							setVillages([]);
							setSelectedVillageId(null);
							fetchSectors(vidhanSabhas[index].id);
						}else showToaster("गलती।")
          }}
					buttonTextStyle={{ color: 'black' }}
					buttonStyle={{borderRadius: 10}}
					defaultButtonText="विधान सभा चुनें।"
        />
      </View>}
      {!!sectors.length && <View style={{...styles.wrapperView, marginBottom: 30}}>
        <Text style={styles.text}>क्षेत्र (sector)</Text>
        <SelectDropdown
          data={sectors.map(vs=>vs.name)}
          onSelect={(selectedItem, index) => {
						if(sectors[index].name===selectedItem){
							setSelectedSectorObj(sectors[index]);
							setBuths([]);
							setSelectedButhObj(null);
							setVillages([]);
							setSelectedVillageId(null);
							fetchBuths(sectors[index].id);
						}else showToaster("गलती।")
          }}
					buttonTextStyle={{ color: 'black' }}
					buttonStyle={{borderRadius: 10}}
					defaultButtonText="क्षेत्र चुनें।"
        />
      </View>}
      {!!buths.length && <View style={{...styles.wrapperView, marginBottom: 30}}>
        <Text style={styles.text}>बूथ</Text>
        <SelectDropdown
          data={buths.map(vs=>vs.name)}
          onSelect={(selectedItem, index) => {
						if(buths[index].name===selectedItem){
							setSelectedButhObj(buths[index]);
							setVillages([]);
							setSelectedVillageId(null);
							fetchVillages(buths[index].id);
						}else showToaster("गलती।")
          }}
					buttonTextStyle={{ color: 'black' }}
					buttonStyle={{borderRadius: 10}}
					defaultButtonText="क्षेत्र चुनें।"
        />
      </View>}
      {!!villages.length && <View style={{...styles.wrapperView, marginBottom: 30}}>
        <Text style={styles.text}>गाँव</Text>
        <SelectDropdown
          data={villages.map(vs=>vs.name)}
          onSelect={(selectedItem, index) => {
						if(villages[index].name===selectedItem){
							setSelectedVillageId(villages[index].id);
						}else showToaster("गलती।")
          }}
					buttonTextStyle={{ color: 'black' }}
					buttonStyle={{borderRadius: 10}}
					defaultButtonText="क्षेत्र चुनें।"
        />
      </View>}
    </View>
  );
};

export default VillageSelection;

const styles = StyleSheet.create({
  wrapperView: {
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    padding: 0,
    color: 'black',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
  },
});
