import React from 'react'
import Card from './Card'

const Media = (props) => {
    const {min, max} = props

    return (
        <Card title="Média dos Números" color="green">
            <div className="space-x-4">
                <p>
                    <span>Resultado</span>
                    <strong className="p-3">{ (max + min) /2 }</strong>
                </p>            
            </div>
        </Card>
    )
}

export default Media