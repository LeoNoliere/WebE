import React from 'react';
import '../../CSS/Intro.css';

import Music from '../Music';
import Dolce_Vita from '../../Musics/DolceVitaUnpluggedWEBE.mp3';

class Intro extends React.Component{
    render(){
        return(
            <div className='Intro'>
                <Music url={Dolce_Vita}/>
                <h3>Bonjour et bienvenue dans le TP React</h3>
                <br/>
                <div class="introImg"></div>
                <br/>
                <h3>de l'option Web Engineering</h3>
            </div>
        )
    }
}

export default Intro;