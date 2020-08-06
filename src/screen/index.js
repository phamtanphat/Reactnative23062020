import React, { Component } from 'react'
import { 
    View , 
    StyleSheet ,
} from 'react-native'
import Form from '../component/Form';
import Filter from '../component/Filter';
import Word from '../component/Word';
import {connect} from 'react-redux';

class Main extends Component {

    componentDidMount(){
        const URL = 'https://servertuvung23062020.herokuapp.com/word'
        // Xu ly cho get
        // fetch(URL,{method : 'GET'})
        // .then(response => response.json())
        // .then(value => console.log(value))

        // Xu ly cho post
        fetch(URL,{
            method : 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                en : "Three",
                vn : "Ba"
            })
        })
        .then(response => response.json())
        .then(value => console.log(value))
    }

    render() {
        return (
            <View style={styles.container}>
                <Form />
                <Filter />
                <Word />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       flex : 1,
       marginHorizontal: 5
    }
})

export default connect()(Main)


