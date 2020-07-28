import React, { PureComponent } from 'react'
import { Text, View , StyleSheet , TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class Child extends PureComponent {
    render() {
        const { dispatch } = this.props
        return (
            <View style={styles.boxTouchable}>
                <TouchableOpacity
                    onPress={() => dispatch({type : 'INCREASE'})}
                    style={styles.touchableIncrease}
                >
                    <Text>{this.props.isSave}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => dispatch({type : 'DECREASE'})}
                    style={styles.touchableDecrease}
                >
                    <Text>Decrease</Text>   
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => dispatch({type : 'RESET' , count : 0})}
                    style={styles.touchableReset}
                >
                    <Text>RESET</Text>
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
export default connect()(Child)