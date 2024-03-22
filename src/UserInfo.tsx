import { ReactNode, createContext } from 'react'

interface User {
    weight: number
    height: number
    sex: string
    age: number
    exerciseLevel: number
}

const DEFAULT_VALUE: User = {
    weight: 0,
    height: 0,
    sex: '',
    age: 0,
    exerciseLevel: 0
}

export const UserContext = createContext(DEFAULT_VALUE)

interface UserProviderProps {
    children: ReactNode
    user: User
}

export default function UserProvider({ children, user }: UserProviderProps) {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
} 