import { Button, Stack } from "@mui/material";

export default function MuiButton() {
    return (
        <>
            <Stack display="block">
                <Button variant="outlined" disableRipple>Button</Button>
                <Button variant="text">Button</Button>
                <Button variant="contained">Button</Button>
            </Stack>
        </>
    )
}
