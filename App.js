import React, { Component } from 'react'
import { Text, View , SafeAreaView , StyleSheet} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.flexBoxColum}>
          <Text 
            style={[
              styles.textStyle,
              {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
              Red
          </Text>
          <Text 
            style={[
              styles.textStyle,
              {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
              Green
          </Text>
          <Text 
            style={[
              styles.textStyle,
              {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
              Blue
          </Text>
          <Text 
            style={[
              styles.textStyle,
              {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
              Orange
          </Text>
          <Text 
            style={[
              styles.textStyle,
              {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
              Gray
          </Text>
          <Text 
            style={[
              styles.textStyle,
              {backgroundColor : `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}]}>
              Pink
          </Text>
        </View>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent: 'center',
      alignItems : 'center'
    },
    textStyle: {
      color : 'black',
      fontSize : 20,
      textAlign: 'left'
    }
    
})