import React from 'react'
import Card from './Card'

const Intervalo = (props) => {
    
    const {min, max} = props

    return (
        <Card title="Intervalo de Números" color="red">
            <div className="space-x-4">

                <label>
                    <strong className="pr-3">Mínimo:</strong>
                    <input className="w-24 rounded p-2 text-center text-gray-900" type="number" 
                    value={min} min={0}
                    onChange={e => props.onMin(+e.target.value)}/>
                </label>           
                
                <label>
                    <strong className="pr-3">Máximo:</strong>
                    <input className="w-24 rounded p-2  text-center text-gray-900" type="number" 
                    value={max} min={0}
                    onChange={e => props.onMax(+e.target.value)}/>
                </label>            

            </div>
        </Card>
    )
}

export default Intervalo