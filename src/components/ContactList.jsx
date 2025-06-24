import ContactItem from "./ContactItem.jsx";
import ContactSearch from "./ContactSearch.jsx"
import {Box, Typography} from "@mui/material";

function ContactList({ contacts, onDelete }) {

    return (
        contacts.length === 0
         ? <Typography>List is empty</Typography>
            :<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <ContactSearch />
                {contacts.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} onDelete={onDelete}/>
                ))}
            </Box>
    )
}

// если список пустой, то вывести надпись
// Вопрос: где лучше делать проверку на пустой список - в начале тела фугкции или в return?
export default ContactList