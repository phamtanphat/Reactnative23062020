import 'react-native-gesture-handler';
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
import DetailProduct from './Product/DetailProduct';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationContainer >
                    <Stack.Navigator 
                        initialRouteName="ListProduct">
                        <Stack.Screen name="ListProduct" component={ListProduct}/>
                        <Stack.Screen name="DetailProduct" component={DetailProduct}/>
                    </Stack.Navigator>
                </NavigationContainer>
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


