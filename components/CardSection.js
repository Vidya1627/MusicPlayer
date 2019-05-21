import React from 'react';
import { View } from 'react-native';


class CardSection extends React.Component {

render() {
    return (
      <View style={styles.containerStyle}>
          { this.props.children }
      </View>
    );
  }
}


const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    marginLeft: 10,
    alignSelf: 'flex-start',
    marginRight: 100,
    position: 'relative'
  }
};


export default CardSection;
