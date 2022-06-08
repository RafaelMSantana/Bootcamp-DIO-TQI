import React from 'react'
//import PetShop from './PetShop'
import Escola from './Escola'

function App () {

    /* const handleClick = () => {
        console.log('Iniciar banho')
    }

    return (
        <PetShop
            dogs={2}
            customerName="Ricardo"
            onClick={handleClick}
            status='Completed'
        />
    ) */

    const handleClick = () => {
        console.log('Gerando boleto')
    }

    return (
        <Escola
            totalStudents={100}
            studentName='Henrique'
            students={[1, 2]}
            paymentsOk={false}
            onClick={handleClick}
        />
    )
}

export default App