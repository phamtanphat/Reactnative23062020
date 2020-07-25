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

    onIncrease = () => {
        this.setState({count : this.state.count + 1})
    }
    onDecrease = () => {
        this.setState({count : this.state.count - 1})
    }
    onReset = () => {
        this.setState({count : 0})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text 
                    style={styles.textCount}> 
                    Count : {this.state.count} 
                </Text>
                <Child 
                    onReset={this.onReset}
                    onDecrease={this.onDecrease}
                    onIncrease={this.onIncrease}/>
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
