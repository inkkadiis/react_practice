import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import usePhoneBookStore from "../stores/usePhonebookStores";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usePhoneBookStore();

  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) return;
    addContact(name, phoneNumber);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone-number"
        label="Phone"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button variant="outlined" size="large" onClick={handleAddContact}>
        Add
      </Button>
    </Box>
  );
};

export default ContactForm;
