import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './../components/Card';
import CardSection from './../components/CardSection';
import Button from './../components/Button';
import { ReactNativeAudioStreaming } from 'react-native-audio-stream';

var song = null;

var BASE_URL = "http://storage.googleapis.com/automotive-media/";

class SongScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      playMessage : "Play"
    };
  }

  playPauseSong() {
    if (this.state.playMessage == "Play") {
      ReactNativeAudioStreaming.play(BASE_URL + this.props.song.source, {});
      this.setState({playMessage: "Pause"});
    }
    else {
      ReactNativeAudioStreaming.pause();
      this.setState({playMessage: "Play"});
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStlye}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: BASE_URL + this.props.song.image }}
          />
          </View>
          <View>
             <Text style={styles.headerTextStyle}>{this.props.song.title}</Text>
             <Text>{this.props.song.artist}</Text>
          </View>
        </CardSection>

        <CardSection>
           <Image
             style={styles.imageStyle}
             source={{ uri: BASE_URL + this.props.song.image }}
           />
        </CardSection>

        <CardSection>
            <Button onPress={() => this.playPauseSong()}>
               {this.state.playMessage}
            </Button>
            <Button onPress={() => Linking.openURL(this.props.song.site)}>
               View Online
            </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStlye: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1
  }
};



export default SongScreen;
