import React, { Component } from 'react'
import { SafeAreaView , StyleSheet} from 'react-native'
// import Main from './src/screen'
// import Form from './src/component/Form'
import Box from './src/component/Box'
import { createStore } from 'redux'
// import Filter from './src/component/Filter'


// 1 : Tao ra store
const store = createStore(function(state = 0,action){
    if(action.type === 'INCREASE'){
      return state + 1
    }
    return state
})

console.log(store.getState())
store.dispatch({type : 'INCREASE'})
console.log(store.getState())



export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Box/>
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

