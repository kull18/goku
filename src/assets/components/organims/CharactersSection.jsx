import { useEffect } from "react";
import Card from "../molecules/Card";
import './Characters.css'
import { useState } from "react";
function CharactersSection() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters")
        .then((reponse) => {
            if(reponse.ok) {
                return reponse.json()
            }
        })
        .then((data) => {
            setData(data)
        })
        .then(() =>  {
            console.log(data)
        })
    })
    return(
        <div className="container">
           <Card data={data}></Card> 
        </div>
    )
}

export default CharactersSection; 