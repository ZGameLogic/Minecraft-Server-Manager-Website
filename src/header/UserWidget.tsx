import {useAuthData} from "../global/auth/useAuthData.ts";
import {Avatar, ButtonBase, ListItemIcon, Menu, MenuItem, Stack, Typography} from "@mui/material";
import {useMemo, useState, type MouseEvent} from "react";
import {Logout} from "@mui/icons-material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function UserWidget() {
  const { authData, logout } = useAuthData();
  const userId = useMemo(() => authData?.discordId ?? localStorage.getItem('user_id'), [authData]);
  const userAvatar = useMemo(() => authData?.discordAvatar ?? localStorage.getItem('user_avatar'), [authData]);
  const userName = useMemo(() => authData?.discordUsername ?? localStorage.getItem('user_name'), [authData]);
  const isAuthData = useMemo(() => userId && userName && userAvatar, [userAvatar, userId, userName]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    logout();
    handleClose();
  };

  return isAuthData ? <>
      <ButtonBase onClick={(event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)}>
        <Stack direction={'row'} spacing={1} sx={{alignItems: 'center'}}>
        <Typography>{userName}</Typography>
        <Avatar src={`https://cdn.discordapp.com/avatars/${userId}/${userAvatar}.png?size=56`}/>
        </Stack>
      </ButtonBase>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItem disabled={true}>
          <ListItemIcon>
            <OpenInNewIcon fontSize="small" />
          </ListItemIcon>
          Link Minecraft Account
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>:
  <ButtonBase href={`https://discord.com/oauth2/authorize?client_id=${import.meta.env.VITE_DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${import.meta.env.VITE_REDIRECT_URL}&scope=identify`}>
    <Stack direction={'row'} spacing={1} sx={{alignItems: 'center'}}>
      <Typography>Login</Typography>
      <Avatar />
    </Stack>
  </ButtonBase>;
}

export default UserWidget;