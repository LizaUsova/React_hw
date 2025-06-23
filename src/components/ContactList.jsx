import ContactItem from "./ContactItem.jsx";
import ContactSearch from "./ContactSearch.jsx"
import {Box} from "@mui/material";

function ContactList({ contacts }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <ContactSearch />
            {contacts.map((contact) => <ContactItem key={contact.id} contact={contact} />)}
        </Box>
    )
}

// если список пустой, то вывести надпись
export default ContactList