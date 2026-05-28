import {useAuthData} from "../global/auth/useAuthData.ts";
import {Avatar, ButtonBase, Stack, Typography} from "@mui/material";
import {useMemo} from "react";

function UserWidget() {
  const { authData } = useAuthData();
  const userId = useMemo(() => authData?.discordId ?? localStorage.getItem('user_id'), [authData]);
  const userAvatar = useMemo(() => authData?.discordAvatar ?? localStorage.getItem('user_avatar'), [authData]);
  const userName = useMemo(() => authData?.discordUsername ?? localStorage.getItem('user_name'), [authData]);
  const isAuthData = useMemo(() => userId && userName && userAvatar, [userAvatar, userId, userName]);

  return isAuthData ? <Stack direction={'row'} spacing={1} sx={{alignItems: 'center'}}>
    <Typography>{userName}</Typography>
    <Avatar src={`https://cdn.discordapp.com/avatars/${userId}/${userAvatar}.png?size=56`}/>
  </Stack>:
  <ButtonBase href={`https://discord.com/oauth2/authorize?client_id=${import.meta.env.VITE_DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${import.meta.env.VITE_REDIRECT_URL}&scope=identify`}>
    <Stack direction={'row'} spacing={1} sx={{alignItems: 'center'}}>
      <Typography>Login</Typography>
      <Avatar />
    </Stack>
  </ButtonBase>;
}

export default UserWidget;