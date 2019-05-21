import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ViewButton from './ViewButton';

var BASE_URL = "http://storage.googleapis.com/automotive-media/";

class AlbumBrief extends React.Component {
render() {
  return (
    <Card>
    <ViewButton onPress={() => this.props.navigation.navigate('SongScreen', {
        song: this.props.song
    })} >
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
      </ViewButton>
    </Card>
  );
}
}

const styles = {
headerContentStyle: {
  flexDirection: 'column',
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
}
};



export default AlbumBrief;
