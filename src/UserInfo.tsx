import { ReactNode, createContext } from 'react'

interface User {
    weight: number
    height: number
    sex: string
    exerciseLevel: number
}

const DEFAULT_VALUE: User = {
    weight: 0,
    height: 0,
    sex: '',
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