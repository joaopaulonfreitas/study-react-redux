import React from 'react'


const Card = (props) => {
    return (
        <article className={`flex flex-1 flex-col my-5 bg-${props.color}-500`}>
            
            <header className={`flex justify-center font-semibold uppercase p-3 bg-${props.color}-700 opacity-95`}>
                <h2 className="flex-1">{props.title}</h2>
            </header>
            
            <main className="p-3">
                {props.children}
            </main>

        </article>
    )
}

export default Card