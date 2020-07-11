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
          <Text 
            style={{backgroundColor : 'yellow'}}>
              View 1
          </Text>
          <Text 
            style={{backgroundColor : 'green'}}>
              View 2
          </Text>
        </View>
      </SafeAreaView>
    )
  }
}
