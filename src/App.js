import React, {useState} from 'react'

import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

const App = (props) => {

    const [min, setMin] = useState(10)
    const [max, setMax] = useState(48)

    return (
        <div className="container mx-auto flex flex-col text-center">

            <h1 className="font-bold text-4xl mb-4">Exercício React-Redux (Simples)</h1>

            <Intervalo min={min} max={max}
            onMin={setMin}
            onMax={setMax}
            ></Intervalo>

            <div className="w-full flex">
                
                <Media min={min} max={max}></Media>
                <Soma min={min} max={max}></Soma>
                <Sorteio min={min} max={max}></Sorteio>

            </div>
        </div>
    )
}

export default App