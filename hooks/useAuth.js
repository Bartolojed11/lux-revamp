import { useMemo } from 'react'
import { useSession } from 'next-auth/react'

export function useAuth() {
    const { data: session, status } = useSession()

    const isAuthenticated = useMemo(() => {
        return status === 'authenticated'
    }, [status])

    const token = useMemo(() => {
        if (isAuthenticated) return session.user.accessToken
        return undefined
    }, [status])

    const user = useMemo(() => {
        if (isAuthenticated) {
            return {
                first_name: session.user.first_name,
                last_name: session.user.last_name,
                phone: session.user.phone_number,
                fullname:
                    session.user.first_name + ' ' + session.user.last_name,
                gender: session.user.gender,
                birthday: session.user.birthday,
            }
        }
    })

    return { isAuthenticated, token, user }
}
