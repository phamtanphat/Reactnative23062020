import React, { Component } from 'react'
import { Text, View , SafeAreaView} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex : 1}}>
        <View 
          style={{
            backgroundColor: '#f20',
            flex : 1,
            flexDirection : 'column',
          }}>
          <View style={{backgroundColor : 'red' , flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
            <Text >A</Text>
          </View>
          <View style={{backgroundColor : 'green' , flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
            <Text >B</Text>
          </View>
          <View style={{backgroundColor : 'blue' , flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
            <Text >C</Text>
          </View>
          <View style={{backgroundColor : 'orange' , flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
            <Text >D</Text>
          </View>
        </View>
        <View 
          style={{
            backgroundColor: 'yellow',
            flex : 1,
            flexDirection : 'row',
          }}>
          <View style={{backgroundColor : 'red' , flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
            <Text >A</Text>
          </View>
          <View style={{backgroundColor : 'green' , flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
            <Text >B</Text>
          </View>
          <View style={{backgroundColor : 'blue' , flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
            <Text >C</Text>
          </View>
          <View style={{backgroundColor : 'orange' , flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
            <Text >D</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
