import {type PropsWithChildren, useEffect, useState} from "react";
import {AuthDataContext} from "./AuthDataContext.ts";
import {useSearchParams} from "react-router";

export type AuthData = {
  msmToken: string;
  discordId: number;
  discordUsername: string;
  discordAvatar: string;
}

export function AuthDataProvider({ children }: PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [authData, setAuthData] = useState<AuthData | undefined>(undefined);

  useEffect(() => {
    console.log('Code: ', searchParams.get('code'));
    setSearchParams({}, { replace: true });
  }, [searchParams, setSearchParams]);

  return <AuthDataContext.Provider value={{
    authData
  }}>
    {children}
  </AuthDataContext.Provider>
}