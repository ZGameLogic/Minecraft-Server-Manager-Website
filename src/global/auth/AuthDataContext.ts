import {createContext, type Dispatch, type SetStateAction} from "react";
import type {AuthData} from "./AuthDataProvider.tsx";

export type AuthDataContextType = {
  authData?: AuthData;
  setAuthData: Dispatch<SetStateAction<AuthData | undefined>>;
  logout: () => void;
};

export const AuthDataContext = createContext<AuthDataContextType>({
  authData: undefined,
  setAuthData: () => {},
  logout: () => {}
});