import {type PropsWithChildren, useEffect, useState} from "react";
import {ServerDataContext} from "./ServerDataContext.ts";

export type ServerData = {
  autoStart: boolean;
  domain: string;
  id: string;
  name: string;
  port: number;
  serverDir: string;
  startFile: string;
  type: 'modded' | 'vanilla';
  version: string;
  pingData?: {
    favicon: string;
    isModded?: boolean;
    description: string;
    players: {
      max: number;
      online: number;
      sample?: {
        id: string;
        name: string;
      }[]
    }
    version: {
      name: string;
      protocol: number;
    }
  }
}

export function ServerDataProvider({children}: PropsWithChildren){
  const [serverData, setServerData] = useState<ServerData[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/servers`)
      .then(res => res.json()).then((data: ServerData[]) => {
      setServerData(data);
    }).catch(() => {});
  }, []);

  return <ServerDataContext.Provider value={{
    serverData
  }}>{children}</ServerDataContext.Provider>
}