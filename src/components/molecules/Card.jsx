import Image from '../atoms/Image';
import { useState } from 'react';
import CardDragon from '../atoms/CardDragon';
import './Card.css'
function Card({ name, ki, maxki, race, image }) {
    return (
        <CardDragon>
            <div id="nameCard">
                <label className='nameDragon'>name: {name}</label>
            </div>
            <div id="content">
                <div id="image">
                    <Image src={image}></Image>
                </div>
                <div id="data">
                    <label>ki: {ki}</label>
                    <label>maxki: {maxki}</label>
                    <label>race: {race}</label>
                </div>
            </div>
        </CardDragon>
    )
}

export default Card; 