import React from 'react'
import { useContext } from 'react'
import { themeContext } from './Themes'

function Form () {

    const context = useContext(themeContext)

    const renderForm = (
        <form>
            <label>Nome:</label>
            <input></input>
            <label>E-mail:</label>
            <input></input>
            <label>Idade:</label>
            <input></input>
            <label>Telefone:</label>
            <input></input>
        </form>
    )

    const renderNotLogged = (
        <h1>É necessário realizar o login!</h1>

    )

    return (
        <div>{!context.token? renderNotLogged : renderForm}</div>
        
    )
}

export default Form