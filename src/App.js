import { Box, Stack, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import SideBar from "./components/Sidebar";
import Navbar from './components/Navbar'
import { ThemeProvider } from "@emotion/react";
import React, { useState } from 'react'

export default function App() {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={darkTheme.palette.background.default} color={darkTheme.palette.text.primary}>
        <Navbar/>
        <Stack direction="row" justifyContent="space-between">
          <SideBar mode={mode} setMode={setMode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}
