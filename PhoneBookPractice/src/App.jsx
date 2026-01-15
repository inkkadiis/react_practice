import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactInfo from "./components/ContactInfo";
import ContactList from "./components/ContactList";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SearchPart from "./components/SearchPart";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="md">
      <Stack spacing={4}>
        <h1>Phone Book</h1>
        <SearchPart />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} direction="row" alignItems="center">
            <Grid size={6}>
              <ContactInfo />
            </Grid>
            <Grid size={6}>
              <ContactList />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
