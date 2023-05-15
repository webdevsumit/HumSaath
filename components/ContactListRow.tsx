import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactListRow = ({ row1, row2, row3, isHead=false, hasOneRow=false }) => {
  return (
    <View style={styles.main}>
      <Text style={{...styles.text, width: hasOneRow?'0%':'45%', fontWeight: isHead?'bold':'normal', textAlign: hasOneRow?'center':'left'}}>{row1}</Text>
      <Text style={{...styles.text, width: hasOneRow?'100%':'30%', fontWeight: isHead?'bold':'normal', textAlign: hasOneRow?'center':'left'}}>{row2}</Text>
      <Text style={{...styles.text, width: hasOneRow?'0%':'25%', fontWeight: isHead?'bold':'normal', textAlign: hasOneRow?'center':'left'}}>{row3}</Text>
    </View>
  )
}

export default ContactListRow

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#FFF',
        marginTop:5,
        marginBottom: 5,
        flexDirection: 'row',
        padding: 5,
        height: 32,
      },
      text: {
        color: 'black',
      },
})