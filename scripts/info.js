function imcCalculator(weight, height) {
    const imc = (weight / height ** 2).toFixed(1)
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

function dailyCalorieExpenditure(weight, height, age, sex, exerciseLevel) {
    const maleRate = (88.36 + (13.4 * weight) + (4.8 * height * 100) - (5.7 * age)) * exerciseLevel
    const femaleRate = (447.6 + (9.2 * weight) + (3.1 * height * 100) - (4.3 * age)) * exerciseLevel
    return sex == 'm'
        ? Math.floor(maleRate)
        : Math.floor(femaleRate)
}

function waterCalculator(weight) {
    return Math.floor(weight * 35)
}

function dietSelector(weight, height, age, sex, exerciseLevel) {
    const imc = (weight / height ** 2).toFixed(1)
    switch (true) {
        case (imc >= 25):
            return dailyCalorieExpenditure(weight, height, age, sex, exerciseLevel) - 500
        case (imc < 18.5):
            return dailyCalorieExpenditure(weight, height, age, sex, exerciseLevel) + 500
        default:
            return dailyCalorieExpenditure(weight, height, age, sex, exerciseLevel)
    }
}

window.onload = () => {

    const urlParams = new URLSearchParams(window.location.search)
    const height = urlParams.get('height') / 100
    const weight = urlParams.get('weight')
    const sex = urlParams.get('sex')
    const age = urlParams.get('age')
    const exerciseLevel = urlParams.get('exercise')

    const imc = document.getElementById('imc')
    const dce = document.getElementById('dce')
    const water = document.getElementById('water')
    const diet = document.getElementById('diet')

    imc.innerHTML += ` ${imcCalculator(weight, height)}`
    dce.innerHTML += ` ${dailyCalorieExpenditure(weight, height, age, sex, exerciseLevel)}kcal`

    water.innerHTML += ` ${waterCalculator(weight)}ml`
    diet.innerHTML += ` ${dietSelector(weight, height, age, sex, exerciseLevel)}kcal`

}