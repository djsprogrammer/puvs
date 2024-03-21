import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/all.css'

import Index from './pages/Index'
import Form from './pages/Form'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/form' element={<Form />} />
            </Routes>
        </Router>
    )
}