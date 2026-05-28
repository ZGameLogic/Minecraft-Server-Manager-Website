import {type PropsWithChildren, useState} from "react";
import {AuthDataContext} from "./AuthDataContext.ts";

export type AuthData = {
  msmToken: string;
  discordId: number;
  discordUsername: string;
  discordAvatar: string;
}

export function AuthDataProvider({ children }: PropsWithChildren) {
  const [authData, setAuthData] = useState<AuthData | undefined>(undefined);

  return <AuthDataContext.Provider value={{
    authData
  }}>
    {children}
  </AuthDataContext.Provider>
}