import {AppBar, Box, Button, Divider, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router";

function AppHeader() {
  return <AppBar position={'static'} >
    <Toolbar>
      <Typography sx={{ marginRight: 2 }} variant={'h4'}>Minecraft Server Manager</Typography>
      <Divider orientation={'vertical'} flexItem sx={{ marginRight: 2 }} />
      <Button
        sx={{ borderRadius: 0, '&.active': { borderBottom: '2px solid white' } }}
        color={'inherit'}
        component={NavLink}
        to={'/'}>
        Dashboard
      </Button>
      <Button
        sx={{ borderRadius: 0, '&.active': { borderBottom: '2px solid white' } }}
        color={'inherit'}
        component={NavLink}
        to={'/servers'}>
        Servers
      </Button>
      <Box sx={{ flexGrow: 1 }} />
    </Toolbar>
  </AppBar>
}

export default AppHeader;