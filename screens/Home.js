import React from 'react';
import ReactNative from 'react-native';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Header from './../components/Header.js';
import AlbumList from './../components/AlbumList.js';

class Home extends React.Component {

  render() {
    return (
      <View style={{ flex: 1}}>
         <Header headerText={'PlayList'} />
         <AlbumList navigation={this.props.navigation}  />
      </View>
     );
   }
}

// const App = () => (
//   <Text>Some Functional Component Text</Text>
// );
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
