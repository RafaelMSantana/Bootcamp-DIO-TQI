import React, { useRef } from 'react'
import { useEffect } from 'react'



function App () {
    const inputRef = useRef()
    const count = useRef(1)

    const handleClick = () => {
        inputRef.current.focus()
        console.log('inputRef.current', inputRef.current)
    }

    useEffect(() => {
        setTimeout(() => {
            console.log('Passou aqui')
            count.current = 209
        }, 3000)
    })

    return (
        <>
        <h1>
            Valor de count: {count.current}
        </h1>
        Foco: <input ref={inputRef}></input>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={handleClick}>Focar</button>
        </>
    )
    
}

export default App