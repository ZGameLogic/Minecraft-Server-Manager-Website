import type {ServerData} from "../global/server/ServerDataProvider.tsx";
import {Card, CardContent, Typography} from "@mui/material";

type ServerCardProps = {
  data: ServerData;
}

function ServerCard({data}: ServerCardProps){
  return <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography variant={'h4'}>{data.name}</Typography>
      <Typography>{data.pingData ? 'Up' : 'Down'}</Typography>
      {data.pingData && data.pingData.players.sample ? <>
      {data.pingData.players.sample.map(player => <Typography key={player.id}>{player.name}</Typography>)}
      </> : undefined}
    </CardContent>
  </Card>
}

export default ServerCard;