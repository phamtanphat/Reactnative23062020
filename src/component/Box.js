import React, { Component } from 'react'
import { Text, View , StyleSheet , TouchableOpacity} from 'react-native'
import Child from './Child';

export default class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    render() {
        console.log("Box")
        return (
            <View style={styles.container}>
                <Text 
                    style={styles.textCount}> 
                    Count : {this.state.count} 
                </Text>
                <Child/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems :'center'
    },
    textCount: {
        fontSize : 30,
        color : 'red',
        marginBottom : 10   
    }
})
