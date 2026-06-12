import {useServerData} from "../global/server/useServerData.ts";
import ServerCard from "./ServerCard.tsx";
import {Box, Stack} from "@mui/material";

function Dashboard() {
  const { serverData } = useServerData();

  return <Box sx={{padding: 2}}>
    <Stack direction={'row'} spacing={1}>
      {serverData.map(server => <ServerCard data={server} key={server.id}/>)}
    </Stack>
  </Box>;
}

export default Dashboard;