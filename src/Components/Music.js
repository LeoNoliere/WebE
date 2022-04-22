import React from 'react';

import Sound from 'react-sound';
import ComeCloser from '../Musics/Guts-Come_Closer_(2014).mp3';

class Music extends React.Component {
  
    render() {
      return (
        <div>
        <p>Bonjour</p>
        <Sound
          url={ComeCloser}
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
        </div>
      );
    }
  }
  
  export default Music;