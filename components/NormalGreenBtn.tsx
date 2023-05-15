import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    textFontSize: any;
    text: any;
    onPress: (params: any) => any;
    bgColor: any;
}

const NormalGreenBtn = ({ textFontSize=14, text, onPress, bgColor="#006604" }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{...styles.main, backgroundColor: bgColor}}>
            <Text style={{...styles.text, fontSize: textFontSize}} >{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default NormalGreenBtn

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        // backgroundColor: '#006604',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
    }
})