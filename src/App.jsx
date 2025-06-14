import './App.css'
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import {useState} from "react";
import {Box} from "@mui/material";

function App() {
    const [contacts, setContacts] = useState(['']);

  return (
    <Box display="flex"
         flexDirection="column"
         alignItems="center">
        <ContactForm />
        <ContactList contacts={contacts} />
    </Box>
  )
}

export default App
