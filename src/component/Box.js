import React, { Component } from 'react'
import { Text, View , StyleSheet , TouchableOpacity} from 'react-native'
import Child from './Child';
import { connect } from 'react-redux'

class Box extends Component {
    render() {
        console.log("Render Box")
        return (
            <View style={styles.container}>
                <Text 
                    style={styles.textCount}> 
                    Count : {this.props.count} 
                </Text>
                <Child />
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

// Cach viet tuong minh
const mapStateToProps = function(store){
    return {count : store.count}
}

export default connect(mapStateToProps)(Box)

// Cach viet nhanh
// export default connect(store => ({count : store.count}))(Box)