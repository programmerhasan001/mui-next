import { Edit, Send } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

export default function MuiButton() {
    return (
        <>
            <Stack direction={"row"} spacing={2}>
                <Button variant="outlined" disableRipple>Button</Button>
                <Button variant="outlined" disableRipple href="anchor">Anchor</Button>
                <Button variant="text">Button</Button>
                <Button variant="text" href="#hello">Anchor</Button>
                <Button variant="contained">Button</Button>
            </Stack>

            <Stack direction={"row"} spacing={3} mt={2}>
                <Button variant="contained" color="primary">Button</Button>
                <Button variant="contained" color="secondary">Button</Button>
                <Button variant="contained" color="error">Button</Button>
                <Button variant="outlined" color="warning">Button</Button>
                <Button variant="contained" color="info">Button</Button>
                <Button variant="contained" color="success">Button</Button>
            </Stack>

            <Stack direction={"row"} spacing={2} mt={2}>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">medium</Button>
                <Button variant="contained" size="large">Large</Button>
                <Button variant="contained" size="large" startIcon={<Edit />}>Edit</Button>
                <Button variant="contained" size="large" endIcon={<Send />} disableElevation disableRipple onClick={() => alert("Hello")}>Send</Button>
            </Stack>
        </>
    )
}
