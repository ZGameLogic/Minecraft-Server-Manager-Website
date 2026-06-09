import {useContext} from "react";
import {ServerDataContext} from "./ServerDataContext.ts";

export function useServerData(){
  return useContext(ServerDataContext);
}