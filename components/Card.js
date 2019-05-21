import React from 'react';
import { View } from 'react-native';


class Card extends React.Component {

render() {
    return (
      <View style={styles.containerStyle}>
          {this.props.children}
      </View>
    );
  }
}


const styles ={
 containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 20},
    elevation:3,
    zIndex: 999,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30
 }
};

export default Card;
