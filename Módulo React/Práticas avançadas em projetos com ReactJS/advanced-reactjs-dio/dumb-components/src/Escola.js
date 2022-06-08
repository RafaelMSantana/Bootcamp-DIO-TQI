import React from "react";
import PropTypes from 'prop-types'

function Escola (props) {

    const { totalStudents, students, studentName, paymentsOk, onClick } = props

    return (
        <div>
            <h1>Quantidade de alunos: {totalStudents}</h1>
            <h1>Lista de alunos: {students}</h1>
            <h1>Nome do aluno: {studentName}</h1>
            <div>Mensalidade em dia: {paymentsOk}</div>
            <div></div>
            <button onClick={onClick}>Gerar boleto</button>
        </div>
    )
}

Escola.defaultProps = {
    totalStudents: 200,
    studentName: 'Dagoberto'
}

Escola.propTypes = {
    totalStudents: PropTypes.number.isRequired,
    students: PropTypes.array,
    studentName: PropTypes.string.isRequired,
    paymentsOk: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}

export default Escola