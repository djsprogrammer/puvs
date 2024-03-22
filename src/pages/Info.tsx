import { useContext } from 'react'
import { UserContext } from '../UserInfo'

export function Info() {

    const user = useContext(UserContext)
    const weight = user.weight
    const height = user.height / 100
    const age = user.age
    const exerciseLevel = user.exerciseLevel
    const sex = user.sex

    function imcCalculator() {
        const imc = (weight / height ** 2)
        switch (true) {
            case (imc >= 40):
                return `${imc.toFixed(1)} (obesidade extrema)`
            case (imc >= 35 && imc <= 39.9):
                return `${imc.toFixed(1)} (obesidade grau 2)`
            case (imc >= 30 && imc <= 34.9):
                return `${imc.toFixed(1)} (obesidade grau 1)`
            case (imc >= 25 && imc <= 29.9):
                return `${imc.toFixed(1)} (sobrepeso)`
            case (imc < 18.5):
                return `${imc.toFixed(1)} (baixo peso)`
            default:
                return `${imc.toFixed(1)} (peso adequado)`
        }
    }

    function dailyCalorieExpenditure() {
        const maleRate = (88.36 + (13.4 * weight) + (4.8 * height * 100) - (5.7 * age)) * exerciseLevel
        const femaleRate = (447.6 + (9.2 * weight) + (3.1 * height * 100) - (4.3 * age)) * exerciseLevel
        return sex === 'm'
            ? Math.floor(maleRate)
            : Math.floor(femaleRate)
    }

    function waterCalculator() {
        return Math.floor(weight * 35)
    }

    function dietSelector() {
        const imc = Number((weight / height ** 2).toFixed(1))
        switch (true) {
            case (imc >= 25):
                return dailyCalorieExpenditure() - 500
            case (imc < 18.5):
                return dailyCalorieExpenditure() + 500
            default:
                return dailyCalorieExpenditure()
        }
    }

    return (
        <>
            <div id="main-card">
                <div>
                    <h2>Suas Informações</h2>
                    <ul>
                        <li>IMC: {imcCalculator()}</li>
                        <li>Estimativa de gasto calórico: {dailyCalorieExpenditure()}kcal</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <h2>Nossas Sugestões</h2>
                    <ul>
                        <li>Sugestão de consumo de água: {waterCalculator()}ml</li>
                        <li>Sugestão de ingestão calórica: {dietSelector()}kcal</li>
                    </ul>
                </div>
            </div>
        </>
    )
}