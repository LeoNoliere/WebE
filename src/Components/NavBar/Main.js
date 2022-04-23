import React from 'react';
import Beverages from '../Beverages';
import Music from '../Music';

import ComeCloser from '../../Musics/Guts-Come_Closer_(2014).mp3'


class Main extends React.Component{
    render(){
        return(
            <div className='Main'>
                <Music url={ComeCloser}/>
                <Beverages/>
            </div>
        )
    }
}

export default Main;