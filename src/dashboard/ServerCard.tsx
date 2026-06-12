import type {ServerData} from "../global/server/ServerDataProvider.tsx";
import {Card, CardContent, Divider, Stack, Typography} from "@mui/material";
import MinecraftHead from "../components/MinecraftHead.tsx";
import { RiProgress8Line } from "react-icons/ri";

type ServerCardProps = {
  data: ServerData;
}

function ServerCard({data}: ServerCardProps){
  return <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Stack direction={'row'} sx={{alignItems: 'center'}} spacing={1} >
        <Typography variant={'h4'}>{data.name}</Typography>
        <RiProgress8Line size={25} color={data.pingData ? 'green' : 'red'} />
      </Stack>
      {data.pingData &&
        <>
          <Divider textAlign="left">
              <Typography sx={{
                color: 'text.secondary',
                fontSize: '0.68rem'
              }}>{`Players ${data.pingData?.players.online}/${data.pingData?.players.max}`}</Typography>
          </Divider>
          {data.pingData.players.sample?.map(player => {
            return <Stack direction={'row'} spacing={1} key={player.id} sx={{alignItems: 'center'}}>
              <MinecraftHead uuid={player.id}/>
              <Typography>{player.name}</Typography>
            </Stack>;
          })}
        </>
      }
    </CardContent>
  </Card>
}

export default ServerCard;