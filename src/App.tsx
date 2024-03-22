import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/all.css'

import Index from './pages/Index'
import Form from './pages/Form'
import { Info } from './pages/Info'
import UserProvider from './UserInfo'

export default function App() {

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [sex, setSex] = useState('m')
    const [age, setAge] = useState(0)
    const [exerciseLevel, setExerciseLevel] = useState(0)

    const user = {
        height,
        weight,
        sex,
        age,
        exerciseLevel
    }

    return (
        <UserProvider user={user}>
            <Router>
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route
                        path='/form'
                        element={
                            <Form
                                setHeight={setHeight}
                                setWeight={setWeight}
                                setSex={setSex}
                                setAge={setAge}
                                setExerciseLevel={setExerciseLevel} />
                        }
                    />
                    <Route path='/info' element={<Info />} />
                </Routes>
            </Router>
        </UserProvider>
    )
}