import React from 'react'
import Card from './Card'

const Sorteio = (props) => {

    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio de um Números" color="purple">
            <div className="space-x-4">
                <p>
                    <span>Resultado</span>
                    <strong className="p-3">
                        {aleatorio}
                    </strong>
                </p>            
            </div>
        </Card>
    )
}

export default Sorteio