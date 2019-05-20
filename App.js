import React from 'react';
import ReactNative from 'react-native';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Header from './components/Header.js';
import AlbumList from './components/AlbumList.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
         <Header headerText={'Album'} />
         <AlbumList />
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

AppRegistry.registerComponent('albums', ()=>App);
// {*
// <Text>Open up App.js to start working on your app!</Text>
// <Text>Changes you make will automatically reload.</Text>
// <Text>Shake your phone to open the developer menu.</Text>
// *}
// <View style={styles.container}>
//       </View>
