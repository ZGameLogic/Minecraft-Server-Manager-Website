import {useServerData} from "../global/server/useServerData.ts";
import ServerCard from "./ServerCard.tsx";

function Dashboard() {
  const { serverData } = useServerData();

  return <>
    {serverData.map(server => <ServerCard data={server} key={server.id}/>)}
  </>;
}

export default Dashboard;