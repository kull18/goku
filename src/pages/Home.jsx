import { useEffect, useState } from "react"
import Header from "../components/organims/Header";
import './Home.css'
import CharactersSection from "../components/organims/CharactersSection";
function Home() {


  return (
    <div className="container">
        <Header></Header>
        <CharactersSection></CharactersSection>
    </div>
  )
}

export default Home; 