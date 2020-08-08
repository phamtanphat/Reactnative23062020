import React, { Component } from 'react'
import { 
    View , 
    StyleSheet ,
} from 'react-native'
import Form from '../component/Form';
import Filter from '../component/Filter';
import Word from '../component/Word';
import {connect} from 'react-redux';
import ListProduct from './Product/ListProduct';

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Form />
                <Filter />
                <Word /> */}
                <ListProduct/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       flex : 1,
       marginHorizontal: 5,
    }
})

export default connect()(Main)


