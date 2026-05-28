import {useContext} from "react";
import {AuthDataContext} from "./AuthDataContext.ts";

export function useAuthData() {
  return useContext(AuthDataContext);
}