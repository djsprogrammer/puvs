import '../styles/form.css'

export default function Form() {
    return (
        <>
            <form action="./info">
                <div id="main-card">
                    <div className="input">
                        <label>Altura(cm):</label>
                        <input name="height" type="number" max="220" required />
                    </div>
                    <div className="input">
                        <label>Peso:</label>
                        <input name="weight" type="number" step="0.1" required />
                    </div>
                    <div className="input">
                        <label>Sexo:</label>
                        <select name="sex">
                            <option value="m">Masculino</option>
                            <option value="f">Feminino</option>
                        </select>
                    </div>
                    <div className="input">
                        <label>Idade:</label>
                        <input name="age" type="number" required />
                    </div>
                    <div className="input">
                        <label>Nível de atividade física:</label>
                        <select name="exercise">
                            <option value="1.2">Sedentário</option>
                            <option value="1.375">Levemente Ativo</option>
                            <option value="1.55">Moderadamente Ativo</option>
                            <option value="1.725">Muito Ativo</option>
                            <option value="1.9">Extremamente Ativo</option>
                        </select>
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button id="confirm-button" type="submit">Verificar</button>
                </div>
            </form>
        </>
    )
}