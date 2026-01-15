import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import usePhoneBookInfo from "../Stores/usePhoneBookInfo";

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usePhoneBookInfo();

  const handleAddInfo = () => {
    if (!name.trim() || !phoneNumber.trim()) return;
    addContact(name, phoneNumber);
    setName("");
    setPhoneNumber("");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        fullwidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone-number"
        label="Phone"
        variant="outlined"
        fullwidth
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button variant="contained" size="medium" onClick={handleAddInfo}>
        Add
      </Button>
    </Box>
  );
};

export default ContactInfo;
