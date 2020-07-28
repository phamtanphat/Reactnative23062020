import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';

class Filter extends Component {

  render() {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          value={this.props.filterMode}
          onValueChange={(value) => this.props.onSetFilterMode(value)}
          items={[
              { label: 'Show All', value: 'Show_All' },
              { label: 'Show Forgot', value: 'Show_Forgot' },
              { label: 'Show Memorized', value: 'Show_Memorized' },
          ]}
        />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding : 20,
    marginBottom : 5
  },
  pickerStyle: {
    padding: 50,
  },
});
const mapStateToProps = function(store){
  return {filterMode : store.filterMode}
}

export default connect(mapStateToProps)(Filter);