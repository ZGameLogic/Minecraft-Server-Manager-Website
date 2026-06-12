import {Box} from "@mui/material";

type MinecraftHeadProps = {
  uuid: string;
  size?: 'small' | 'large';
};

function MinecraftHead({uuid, size='small'}: MinecraftHeadProps) {
  const src = `https://minotar.net/helm/${uuid}/32`;

  return <Box
    component={'img'}
    src={src}
    sx={{
      width: size === 'small' ? 16 : 32,
      height: size === 'small' ? 16 : 32
    }}
  /> ;
}

export default MinecraftHead;