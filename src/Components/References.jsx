import React from 'react';
import '../Stylesheets/References.css'

function References(props){
    return(
        <div className='references-container'>
            <img 
                className='reference-image'
                src={require(`../Img/${props.image}.jpg`)} 
                alt='Chris profile'
            />
            <div className='text-reference-container'>
                <p className='reference-name'><strong>{props.name}, {props.enterprise}</strong></p>
                <p className='Level'>{props.level}</p>
                <p className='reference-description'>"{props.description}"</p>
            </div>
        </div>
    )
}

export default References;