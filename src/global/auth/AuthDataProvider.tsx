import {type PropsWithChildren, useEffect, useState} from "react";
import {AuthDataContext} from "./AuthDataContext.ts";

export type AuthData = {
  msmToken: string;
  discordId: number;
  discordUsername: string;
  discordAvatar: string;
}

export function AuthDataProvider({ children }: PropsWithChildren) {
  const [authData, setAuthData] = useState<AuthData | undefined>(undefined);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/auth/token`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json()).then(data => {
      setAuthData(data);
    });
  }, []);

  return <AuthDataContext.Provider value={{
    authData,
    setAuthData
  }}>
    {children}
  </AuthDataContext.Provider>
}