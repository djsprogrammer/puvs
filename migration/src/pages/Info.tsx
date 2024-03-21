export function Info() {

    function imcCalculator(weight: number, height: number) {
        const imc = Number((weight / height ** 2).toFixed(1))
        switch (true) {
            case (imc >= 40):
                return `${imc} (obesidade extrema)`
            case (imc >= 35 && imc <= 39.9):
                return `${imc} (obesidade grau 2)`
            case (imc >= 30 && imc <= 34.9):
                return `${imc} (obesidade grau 1)`
            case (imc >= 25 && imc <= 29.9):
                return `${imc} (sobrepeso)`
            case (imc < 18.5):
                return `${imc} (baixo peso)`
            default:
                return `${imc} (peso adequado)`
        }
    }

    function dailyCalorieExpenditure(weight: number, height: number, age: number, sex: string, exerciseLevel: number) {
        const maleRate = (88.36 + (13.4 * weight) + (4.8 * height * 100) - (5.7 * age)) * exerciseLevel
        const femaleRate = (447.6 + (9.2 * weight) + (3.1 * height * 100) - (4.3 * age)) * exerciseLevel
        return sex === 'm'
            ? Math.floor(maleRate)
            : Math.floor(femaleRate)
    }

    function waterCalculator(weight: number) {
        return Math.floor(weight * 35)
    }

    function dietSelector(weight: number, height: number, age: number, sex: string, exerciseLevel: number) {
        const imc = Number((weight / height ** 2).toFixed(1))
        switch (true) {
            case (imc >= 25):
                return dailyCalorieExpenditure(weight, height, age, sex, exerciseLevel) - 500
            case (imc < 18.5):
                return dailyCalorieExpenditure(weight, height, age, sex, exerciseLevel) + 500
            default:
                return dailyCalorieExpenditure(weight, height, age, sex, exerciseLevel)
        }
    }

    const urlParams = new URLSearchParams(window.location.search)
    const height = Number(urlParams.get('height')) / 100
    const weight = Number(urlParams.get('weight'))
    const sex = urlParams.get('sex') || ''
    const age = Number(urlParams.get('age'))
    const exerciseLevel = Number(urlParams.get('exercise'))

    return (
        <>
            <div id="main-card">
                <div>
                    <h2>Suas Informações</h2>
                    <ul>
                        <li>IMC: {imcCalculator(weight, height)}</li>
                        <li>Estimativa de gasto calórico: {dailyCalorieExpenditure(weight, height, age, sex, exerciseLevel)}kcal</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <h2>Nossas Sugestões</h2>
                    <ul>
                        <li>Sugestão de consumo de água: {waterCalculator(weight)}ml</li>
                        <li>Sugestão de ingestão calórica: {dietSelector(weight, height, age, sex, exerciseLevel)}kcal</li>
                    </ul>
                </div>
            </div>
        </>
    )
}