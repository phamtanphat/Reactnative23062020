import React, { Component } from 'react'
import { SafeAreaView , StyleSheet} from 'react-native'
// import Main from './src/screen'
// import Form from './src/component/Form'
import Box from './src/component/Box'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import Filter from './src/component/Filter'


// 1 : Tao ra store
const store = createStore(function(state = {count : 0},action){
    return state
})


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Box />
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

