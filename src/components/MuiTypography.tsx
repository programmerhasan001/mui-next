import { Typography } from "@mui/material"

export default function MuiTypography() {
  return (
    <div>
      <Typography variant="h1" color="primary.light" gutterBottom>Heading-1</Typography>
      <Typography variant="h2" color="primary">Heading-2</Typography>
      <Typography variant="h3">Heading-3</Typography>
      <Typography variant="h4">Heading-4</Typography>
      <Typography variant="h5" gutterBottom>Heading-5</Typography>
      <Typography variant="h6" component="h6">Heading-6</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ea itaque sit odio temporibus illum obcaecati perferendis quaerat? Ut incidunt illum nemo ipsum in asperiores unde quo ea natus veritatis.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia ratione ipsa eveniet quaerat est saepe impedit pariatur eaque adipisci, quos tempora! Corrupti ad fugiat culpa aliquid commodi voluptates excepturi.
      </Typography>
    </div>
  )
}
