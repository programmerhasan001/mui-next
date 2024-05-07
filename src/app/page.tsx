"use client"
import MuiButton from '@/components/MuiButton'
import MuiIconButton from '@/components/MuiIconButton'
import MuiIcons from '@/components/MuiIcons'
import MuiTypography from '@/components/MuiTypography'
import styled from '@emotion/styled'

function Home() {
  const Button = styled.button`
  color: turquoise;
  padding: 10px 20px;
  border: none;
  background: ${(props: {primary: string}) => (props.primary == "primary" ? "pink" : "black")}
`
  return (
    <div>
      {/* <MuiTypography /> */}
      <MuiButton />
      <MuiIcons />
      <MuiIconButton />
    </div>
  )
}

export default Home