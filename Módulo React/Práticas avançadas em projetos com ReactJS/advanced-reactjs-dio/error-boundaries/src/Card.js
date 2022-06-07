import React, { useContext } from "react";
import { themeContext } from './Themes' 
import Form from './Form'

function Card() {
    const theme = useContext(themeContext)
    console.log('theme:values', theme)
    return (
        <div style={{padding: '50px'}}>
            <Form></Form>
            <button style={{background: theme.background, color: theme.color}}>Card Button</button>
        </div>
    )
}

export default Card