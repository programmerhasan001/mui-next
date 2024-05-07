import { Send } from "@mui/icons-material"
import { IconButton, Stack } from "@mui/material"

function MuiIconButton() {
  return (
    <Stack display={"block"} direction={"row"} spacing={2} mt={2}>
        <IconButton color="success" size="large" sx={{bgcolor: "orange"}}>
            <Send />
        </IconButton>
        <IconButton color="warning" size="small" sx={{bgcolor: "pink"}}>
            <Send />
        </IconButton>
        <IconButton color="warning" size="medium" sx={{bgcolor: "aqua"}}>
            <Send />
        </IconButton>
    </Stack>
  )
}

export default MuiIconButton