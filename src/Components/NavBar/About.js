import React from 'react';
import '../../CSS/About.css';
import Dev from '../../Components/Dev.js';
import charly from '../../Images/CharlyB.jpg'
import jules from '../../Images/god.png'

import Music from '../Music.js';
import Fantasy from '../../Musics/Meiko_Nakahara-Fantasy(1982).mp3';


class About extends React.Component{
    render(){
        return(
            <div className='About'>
                <Music url={Fantasy}/>
                <h3>Voici les informations sur les développeurs qui on participé à ce TP :</h3>
                <div class="worstDev"><Dev devPicture={charly} devLastName="Beaugas" devFirstName="Charly"/></div>
                <div class="bestDev"><Dev devPicture={jules} devLastName="Benveniste" devFirstName="Jules"/></div>
            </div>
        )
    }
}

export default About;