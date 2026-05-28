import {createContext} from "react";
import type {AuthData} from "./AuthDataProvider.tsx";

export type AuthDataContextType = {
  authData?: AuthData;
};

export const AuthDataContext = createContext<AuthDataContextType>({
  authData: undefined
});