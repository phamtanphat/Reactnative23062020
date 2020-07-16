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
                <Child/>
                <Text 
                    style={styles.textCount}> 
                    Count : {this.state.count} 
                </Text>
                <View style={styles.boxTouchable}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({count : this.state.count + 1})
                        }}
                        style={styles.touchableIncrease}
                    >
                        <Text>Increase</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({count : this.state.count - 1})
                        }}
                        style={styles.touchableDecrease}
                    >
                        <Text>Decrease</Text>   
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({count : 0})
                        }}
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
