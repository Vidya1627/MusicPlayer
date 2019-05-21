import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class ViewButton extends React.Component {
  render () {
    return (
        <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
            <View style={styles.textStyle}>
               {this.props.children}
            </View>
         </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create ({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
});


export default ViewButton;
