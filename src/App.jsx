import './App.css'
import AddContactForm from "./components/AddContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import {useState} from "react";
import {Grid} from "@mui/material";

function App() {
    const [contacts, setContacts] = useState([]);

    const handleDelete = (id) => {
        setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
    };

  return (
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12 }} >
              <Grid size={{ xs: 12, sm: 6 }}>
                  <AddContactForm setContacts={setContacts}/>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                    <ContactList contacts={contacts} onDelete={handleDelete}/>
              </Grid >
          </Grid>
  )
}

/*Если contacts пустой, то форма должна отобразиться слева всегда*/

export default App
