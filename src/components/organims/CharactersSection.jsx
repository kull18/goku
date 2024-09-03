import { useEffect } from "react";
import Card from "../molecules/Card";
import './Characters.css'
import { useState } from "react";
function CharactersSection() {
    const [data, setData] = useState([])
    fetch("https://dragonball-api.com/api/characters")
        .then((reponse) => {
            if (reponse.ok) {
                return reponse.json()
            }
        })
        .then((data) => {
            setData(data.items)
        })
        .then(() => {
            console.log(data)
        })
    return (
        <div className="data">
            {
                data.map((item, key) => (
                    <Card key={key} name={item.name} ki={item.ki} maxki={item.maxKi} race={item.race} image={item.image}></Card>
                ))
            }

        </div>
    )
}

export default CharactersSection; 