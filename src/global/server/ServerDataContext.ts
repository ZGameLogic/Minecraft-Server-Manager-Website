import type {ServerData} from "./ServerDataProvider.tsx";
import {createContext} from "react";

export type ServerDataContextType = {
  serverData: ServerData[];
}

export const ServerDataContext = createContext<ServerDataContextType>({
  serverData: []
});