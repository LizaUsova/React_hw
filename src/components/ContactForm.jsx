// Форма для додавання або редагування контакту.
// Має поля: ім’я, телефон, email (або що ти хочеш).
// Працює як на створення нового, так і на оновлення існуючого контакту (за потреби — з передачею initialValues).
import {TextField, Button, Box} from "@mui/material";
import {useState} from "react";

function ContactForm() {

    const [phoneNumbers, setPhoneNumbers] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState('');

    const phoneNumberHandler = (e) => {
        const value = e.target.value;
        const newPhoneNumbers = [...phoneNumbers, value]
        console.log(newPhoneNumbers);
        setPhoneNumbers(newPhoneNumbers)
    }

    return (
        <>
            <h1>Phone book</h1>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
                <TextField
                    fullWidth
                    label="Enter phone number"
                    id="phone"
                    name="phone"
                    value={phoneNumbers}
                    onChange={phoneNumberHandler}
                    sx={{ mb: 2 }}/>
                <Button variant="contained">Contained</Button>
            </Box>
        </>
    )
}

export default ContactForm