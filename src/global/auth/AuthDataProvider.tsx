import {type PropsWithChildren, useCallback, useEffect, useState} from "react";
import {AuthDataContext} from "./AuthDataContext.ts";

export type AuthData = {
  msmToken: string;
  discordId: string;
  discordUsername: string;
  discordAvatar: string;
}

export function AuthDataProvider({ children }: PropsWithChildren) {
  const [authData, setAuthData] = useState<AuthData | undefined>(undefined);

  useEffect(() => {
    if(authData){
      localStorage.setItem('user_id', authData.discordId);
      localStorage.setItem('user_name', authData.discordUsername);
      localStorage.setItem('user_avatar', authData.discordAvatar);
    } else {
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_avatar');
    }
  }, [authData]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/auth/token`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json()).then((data: AuthData) => {
      setAuthData(data);
    }).catch(() => {});
  }, []);

  const logout = useCallback(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => {
      if(!res.ok) return;
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_avatar');
      setAuthData(undefined);
    });
  }, []);

  return <AuthDataContext.Provider value={{
    authData,
    setAuthData,
    logout
  }}>
    {children}
  </AuthDataContext.Provider>
}