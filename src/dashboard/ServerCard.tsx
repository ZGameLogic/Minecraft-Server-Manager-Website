import type {ServerData} from "../global/server/ServerDataProvider.tsx";
import {Box, Card, CardContent, Divider, IconButton, Stack, Typography} from "@mui/material";
import MinecraftHead from "../components/MinecraftHead.tsx";
import { RiProgress8Line } from "react-icons/ri";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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
      <Box
        sx={{
          alignItems:'center',
          bgcolor: 'background.paper',
          paddingInline: 1,
          border: '1px solid',
          borderRadius: 1.5,
          borderColor: "divider",
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="body2">{data.domain}</Typography>
        <IconButton sx={{ marginLeft: 'auto' }} onClick={e => {
          e.stopPropagation();
          navigator.clipboard.writeText(data.domain);
        }}>
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Box>
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