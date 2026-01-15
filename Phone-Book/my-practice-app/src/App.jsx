import { useState } from "react";
import Grid from "@mui/material/Grid";

import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1> 연락처 앱</h1>
        <Grid container spacing={4}>
          <Grid size={6}>
            <ContactForm />
          </Grid>
          <Grid size={6}>
            <ContactList />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
