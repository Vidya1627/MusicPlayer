import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

class Header extends React.Component {

render() {
    return (
      <View style={ styles.viewStyle  }>
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  viewStyle: {
     backgroundColor: '#F8F8F8',
     justifyContent: 'center',
     alignItems: 'center',
     height: 60,
     paddingTop: 15,
     shadowColor: 'red',
     shadowOffset: { width: 10, height: 20},
     shadowOpacity: 1,
     elevation:3,
     zIndex: 999
  },
  textStyle: {
    fontSize: 20
  }
});

export default Header;
