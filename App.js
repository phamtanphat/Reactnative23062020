import React, { Component } from 'react'
import { SafeAreaView , StyleSheet} from 'react-native'
import Main from './src/screen'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Main/>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
    container : {
      flex : 1,
    },
})