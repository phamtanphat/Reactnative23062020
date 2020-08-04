import React, { Component } from 'react'
import { SafeAreaView , StyleSheet} from 'react-native'
import Main from './src/screen'

import { Provider } from 'react-redux'
import store from './src/redux/store'


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Main />
        </Provider>
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

