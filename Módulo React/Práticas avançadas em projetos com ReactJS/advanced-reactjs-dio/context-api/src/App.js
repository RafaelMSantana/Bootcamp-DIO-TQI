import React, { useState, useEffect } from 'react'
import { themeContext, themes } from './Themes'
import Card from './Card'

function App () {
    const [token, setToken] = useState()

    useEffect(() => {
        setTimeout(() => {
            setToken('093423ojifklsdm,cksd,mdr438')
        }, 4000);
    }, [setToken])

    return (
        <themeContext.Provider value={{ ...themes.primary, token}}>
            <Card></Card>
        </themeContext.Provider>
    )
}

export default App