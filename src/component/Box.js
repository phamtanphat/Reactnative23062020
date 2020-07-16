import React, { Component } from 'react'
import { Text, View , StyleSheet , TouchableOpacity} from 'react-native'


export default class Box extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textCount}> Count : 0 </Text>
                <View style={styles.boxTouchable}>
                    <TouchableOpacity
                        style={styles.touchableIncrease}
                    >
                        <Text>Increase</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchableDecrease}
                    >
                        <Text>Decrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchableReset}
                    >
                        <Text>Increase</Text>
                    </TouchableOpacity>
                </View>
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
    },
    boxTouchable: {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    touchableIncrease: {
        backgroundColor : 'green',
        padding : 10
    },
    touchableDecrease: {
        backgroundColor : 'red',
        padding : 10    
    },
    touchableReset: {
        backgroundColor : 'yellow',
        padding : 10
    }
    
})