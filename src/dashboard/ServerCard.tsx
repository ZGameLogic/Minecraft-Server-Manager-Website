import type {ServerData} from "../global/server/ServerDataProvider.tsx";
import {Card, CardContent, Divider, Stack, Typography} from "@mui/material";
import MinecraftHead from "../components/MinecraftHead.tsx";
import { RiProgress8Line } from "react-icons/ri";

type ServerCardProps = {
  data: ServerData;
}

function ServerCard({data}: ServerCardProps){
  return <Card
    onClick={() => console.log("Server card clicked:", data.name, data)}
    sx={{
      maxWidth: 345,
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: 6
      },
    }}
  >
    <CardContent>
      <Stack direction={'row'} sx={{alignItems: 'center'}} spacing={1} >
        <Typography variant={'h4'} noWrap>{data.name}</Typography>
        <RiProgress8Line size={25} color={data.pingData ? 'green' : 'red'} style={{ flexShrink: 0 }}/>
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