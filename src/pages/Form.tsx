import { SetStateAction } from 'react'
import '../styles/form.css'
import { useNavigate } from 'react-router-dom'

interface FormProps {
    setHeight: React.Dispatch<SetStateAction<number>>
    setWeight: React.Dispatch<SetStateAction<number>>
    setSex: React.Dispatch<SetStateAction<string>>
    setAge: React.Dispatch<SetStateAction<number>>
    setExerciseLevel: React.Dispatch<SetStateAction<number>>
}

export default function Form({ setHeight, setWeight, setSex, setAge, setExerciseLevel }: FormProps) {

    const navigate = useNavigate()

    return (
        <>
            <form onSubmit={e => {
                e.preventDefault()
                navigate('/info')
            }}>
                <div id='main-card'>
                    <div className='input'>
                        <label>Altura(cm):</label>
                        <input onChange={e => setHeight(Number(Number(e.target.value)))} type='number' max='220' required />
                    </div>
                    <div className='input'>
                        <label>Peso:</label>
                        <input onChange={e => setWeight(Number(e.target.value))} type='number' step='0.1' required />
                    </div>
                    <div className='input'>
                        <label>Sexo:</label>
                        <select onChange={e => setSex(e.target.value)}>
                            <option value='m'>Masculino</option>
                            <option value='f'>Feminino</option>
                        </select>
                    </div>
                    <div className='input'>
                        <label>Idade:</label>
                        <input onChange={e => setAge(Number(e.target.value))} type='number' required />
                    </div>
                    <div className='input'>
                        <label>Nível de atividade física:</label>
                        <select onChange={e => setExerciseLevel(Number(e.target.value))}>
                            <option value={1.2}>Sedentário</option>
                            <option value={1.375}>Levemente Ativo</option>
                            <option value={1.55}>Moderadamente Ativo</option>
                            <option value={1.725}>Muito Ativo</option>
                            <option value={1.9}>Extremamente Ativo</option>
                        </select>
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button id='confirm-button' type='submit'>Verificar</button>
                </div>
            </form>
        </>
    )
}