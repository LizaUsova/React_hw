// Відображає всі контакти.
// Отримує масив контактів із Redux Store.
// Відображає кожен контакт через ContactItem.

import ContactItem from "./ContactItem.jsx";
import {Box} from "@mui/material";

function ContactList({ contacts }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {contacts.map((contact, index) => <ContactItem contact={contact} key={index}/>)}
        </Box>
    )
}

export default ContactList