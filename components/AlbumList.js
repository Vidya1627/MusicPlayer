import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumBrief from './AlbumBrief.js';


class AlbumList extends React.Component {
  state = { songs: [] };

componentWillMount() {
  axios.get('http://storage.googleapis.com/automotive-media/music.json')
  .then(response => this.setState({ songs: response.data.music }));
}

renderSongs() {
  return this.state.songs.map(song =>
     <AlbumBrief key={song.title} song={ song } navigation={this.props.navigation} />
   );
 }

render() {

  console.log(this.state);

    return (
      <ScrollView>
        {this.renderSongs()}
      </ScrollView>
    );
  }
}


export default AlbumList;
