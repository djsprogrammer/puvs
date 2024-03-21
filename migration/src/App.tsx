import icon from './assets/icon.jpg'

import './styles/all.css'
import './styles/app.css'

export default function App() {
    return (
        <>
            <div id="icon">
                <img src={icon} alt='Logo' />
                <h1>PUVS</h1>
            </div>
            <div id="main-card">
                <div>
                    <p><b>PUVS</b> é um sistema que fornece métricas fundamentais para a saúde, como:</p>
                    <ul>
                        <li><span>IMC</span></li>
                        <li><span>Estimativa de gasto calórico</span></li>
                        <li><span>Recomendação de consumo de água</span></li>
                        <li><span>Sugestão de ingestão calórica</span></li>
                    </ul>
                </div>
                <hr />
                <p>
                    Basta preencher nosso formulário e o resultado estará disponível!
                </p>
            </div>
            <a id="confirm-button" href="./pages/form.html">Conferir</a>
        </>
    )
}