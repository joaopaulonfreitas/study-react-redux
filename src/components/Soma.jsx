import React from 'react'
import Card from './Card'

const Soma = (props) => {
    
    const {min, max} = props

    return (
        <Card title="Soma dos Números" color="blue">
            <div className="space-x-4">
                <p>
                    <span>Resultado</span>
                    <strong className="p-3">{max + min}</strong>
                </p>            
            </div>
        </Card>
    )
}

export default Soma