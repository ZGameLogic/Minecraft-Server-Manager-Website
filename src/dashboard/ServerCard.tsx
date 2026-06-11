import type {ServerData} from "../global/server/ServerDataProvider.tsx";
import {Card, CardContent, Stack, Typography} from "@mui/material";
import MinecraftHead from "../components/MinecraftHead.tsx";

type ServerCardProps = {
  data: ServerData;
}

function ServerCard({data}: ServerCardProps){
  return <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography variant={'h4'}>{data.name}</Typography>
      <Typography>{data.pingData ? 'Up' : 'Down'}</Typography>
      {data.pingData && data.pingData.players.sample ? <>
      {data.pingData.players.sample.map(player => {
        return <Stack direction={'row'} spacing={1} key={player.id} sx={{alignItems: 'center'}}>
          <MinecraftHead uuid={player.id}/>
          <Typography>{player.name}</Typography>
        </Stack>;
      })}
      </> : undefined}
    </CardContent>
  </Card>
}

export default ServerCard;