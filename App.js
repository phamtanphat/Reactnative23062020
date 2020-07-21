import React, { Component } from 'react'
import { SafeAreaView , StyleSheet} from 'react-native'
import Main from './src/screen'
import Form from './src/component/Form'
import Box from './src/component/Box'
// import Filter from './src/component/Filter'
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Main/>
      </SafeAreaView>
    )
  }
}

console.disableYellowBox = true

const styles = StyleSheet.create({
    container : {
      flex : 1,
    },
})