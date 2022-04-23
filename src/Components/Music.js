import React from 'react';
import '../CSS/music.css';
import Sound from 'react-sound';
import Pause from '../Images/PauseButton.svg';


class Music extends React.Component {
    constructor(props){
      super(props);
      this.state = {playStatus: ''}

      this.handlePause = this.handlePause.bind(this);
      this.handlePlay = this.handlePlay.bind(this);
    }

    componentDidMount(props){
      this.setState({playStatus: Sound.status.PLAYING})
    }

    handlePause(){
      this.setState({playStatus: Sound.status.PAUSED})
    }

    handlePlay(){
      this.setState({playStatus: Sound.status.PLAYING})
    }

    render() {
      const PauseButton = <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet">
     
     <g stroke="none">
     <path d="M1076 5104 c-253 -57 -445 -229 -533 -479 l-28 -80 0 -1985 0 -1985
     28 -80 c111 -316 400 -513 723 -492 180 12 325 79 460 212 64 64 90 98 126
     172 90 179 83 -7 83 2173 0 2180 7 1994 -83 2173 -81 163 -239 296 -417 353
     -104 33 -259 41 -359 18z"/>
     <path d="M3774 5110 c-143 -26 -265 -92 -380 -205 -64 -64 -89 -98 -126 -172
     -90 -179 -83 7 -83 -2173 0 -2180 -7 -1994 83 -2173 81 -163 237 -295 417
     -354 68 -22 98 -26 205 -27 141 -1 211 14 321 68 174 86 298 228 366 421 l28
     80 0 1985 0 1985 -28 80 c-84 236 -262 407 -492 470 -72 19 -240 27 -311 15z"/>
     </g>
     </svg>

     const PlayButton = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="10%" height="10%" viewBox="0 0 10 10"
     preserveAspectRatio="xMidYMid meet">
    
    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M620 5110 c-71 -15 -151 -60 -206 -115 -86 -85 -137 -210 -154 -375
    -13 -129 -13 -3991 0 -4120 17 -165 68 -290 154 -375 149 -149 373 -163 619
    -39 76 37 3457 1975 3546 2031 31 20 90 70 131 112 159 161 196 340 107 521
    -37 76 -152 198 -238 253 -89 56 -3470 1994 -3546 2031 -37 19 -97 44 -133 56
    -74 24 -214 34 -280 20z"/>
    </g>
    </svg>

      return (
        <div className="music">
        <Sound
          url={this.props.url}
          playStatus={this.state.playStatus}
          playFromPosition={300 /* in milliseconds */}
          //onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
          loop={true}
          volume={50}
        />
        <input type="checkbox" id="pauseCheck"/>
        <label for="pauseCheck" id="pause" onClick={this.handlePause}>{PauseButton}</label>
        <label for="pauseCheck" id="play" onClick={this.handlePlay}>{PlayButton}</label>
        </div>
      );
    }
  }
  
  export default Music;