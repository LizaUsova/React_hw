import ContactItem from "./ContactItem.jsx";
import ContactSearch from "./ContactSearch.jsx"
import {Box} from "@mui/material";

function ContactList({ contacts }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <ContactSearch />
            <ContactItem />
            <ContactItem />
            <ContactItem />
        </Box>
    )
}

export default ContactList