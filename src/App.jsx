import './App.css'
import AddContactForm from "./components/AddContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import {useState} from "react";
import {Grid} from "@mui/material";

function App() {
    const [contacts, setContacts] = useState([]);

  return (
      <Grid container spacing={2} columns={12} sx={{ display: 'flex', justifyContent: 'space-between',gap: 5 }}>
          <Grid span={4}>
              <AddContactForm setContacts={setContacts}/>
          </Grid>
          <Grid span={6}>
              <ContactList contacts={contacts} />
          </Grid>
      </Grid>
  )
}

/*Если контакст пустой, то форма должна отобразиться слева всегда*/

export default App
