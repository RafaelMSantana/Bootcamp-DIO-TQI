import React , { Fragment } from 'react'

const store = [{type:'Roupa'}, {type:'Calçado'}, {type:'Camiseta'}]

function Column({ type }) {
    return(<tr>
        <td>{type.name.console}</td></tr>
    )
}

function App () {

    const renderColumns = (element, key) => (<Fragment key={`column-${key}`}><Column type={element.type}></Column></Fragment>)

    return(
        <table>
            {store.map(renderColumns)}
        </table>
    )
}

export default App