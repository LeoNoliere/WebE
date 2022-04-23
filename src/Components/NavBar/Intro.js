import React from 'react';
import '../../CSS/Intro.css';

import Music from '../Music';
import Dolce_Vita from '../../Musics/Ryan_Paris-Dolce_Vita(1983).mp3';

class Intro extends React.Component{
    render(){
        return(
            <div className='Intro'>
                <Music url={Dolce_Vita}/>
                <h3>Bonjour et bienvenue dans le TP React de l'option Web Engineering</h3>
            </div>
        )
    }
}

export default Intro;