import React, { Component } from 'react'
import {FlatList} from 'react-native'
import WordItem from './WordItem'
import {connect} from 'react-redux';
import * as actionCreators from '../redux/action/actionCreators';

class Word extends Component {
    componentDidMount(){
        this.props.fetchAllWords()
    }
    render() {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.words}
                extraData={this.props.words}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item}) => (
                    <WordItem 
                        item={item}
                        filterMode={this.props.filterMode}/>)
                }
            />
        )
    }
}

const mapStateToProps = function(store){
    return {filterMode : store.filterMode , words : store.words}
}
  
export default connect(mapStateToProps,actionCreators)(Word);