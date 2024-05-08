import { Edit, FormatBold, FormatItalic, FormatUnderlined, Send } from "@mui/icons-material";
import { Button, ButtonGroup, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

export default function MuiButton() {
    const [formats, setFormats] = useState<string[] | null>(null)
    console.log(formats)

    const handleFormatChange = (event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        setFormats(updatedFormats)
    }
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
            <Stack direction={"row"} mt={2}>
                <ButtonGroup variant="outlined">
                    <Button>Left</Button>
                    <Button variant="contained">Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack display={"block"} mt={2}>
                <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-label="alignment button group">
                    <Button>Left</Button>
                    <Button onClick={() => alert("center clicked")}>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction="row" mt={2}>
                <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} orientation="vertical" size="small" color="success" exclusive>
                    <ToggleButton value={"bold"} aria-label="bold">
                        <FormatBold />
                    </ToggleButton>
                    <ToggleButton value={"italic"} aria-label="italic">
                        <FormatItalic />
                    </ToggleButton>
                    <ToggleButton value={"underlined"} aria-label="underline">
                        <FormatUnderlined />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </>
    )
}
