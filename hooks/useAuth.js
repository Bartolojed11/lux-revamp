import { useMemo } from "react";
import { useSession } from "next-auth/react"

export function useAuth() {
  const { data: session, status } = useSession();

  const isAuthenticated = useMemo(() => {
    return status === 'authenticated'
  }, [status]);
  
  const token = useMemo(() => {
    console.log("🚀 ~ file: useAuth.js:15 ~ token ~ isAuthenticated", isAuthenticated)
    if (isAuthenticated) return session.user.accessToken
    return undefined
  }, [status]);
    

  return {isAuthenticated, token};
}
