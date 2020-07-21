import React, { PureComponent } from 'react'
import { Text, View , StyleSheet , TouchableOpacity} from 'react-native'

export default class Child extends PureComponent {
    render() {
        return (
            <View style={styles.boxTouchable}>
                <TouchableOpacity
                    onPress={() => this.props.onIncrease()}
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
        )
    }
}

const styles = StyleSheet.create({
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