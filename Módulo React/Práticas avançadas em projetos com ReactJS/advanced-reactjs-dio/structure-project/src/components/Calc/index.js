import React from "react"
import Proptype from 'prop-types'

function Calc(props) {
    const { min, max, onChange } = props
    return(
        
        <div>
            <p>
                Valor mínimo: {min}
            </p>
            <p>
                Valor máximo: {max}
            </p>
            
            <input type='text' onChange={onChange}></input>
        </div>
    )
}

Calc.propTypes = {
    min: Proptype.number.isRequired,
    max: Proptype.number.isRequired,
    onChange: Proptype.func.isRequired
}

export default Calc