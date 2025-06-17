import { v4 as uuidv4 } from 'uuid';
import {TextField, Box, Button} from "@mui/material";
import {useState} from "react";

function AddContactForm() {

    const [allContacts, setContactsNumbers] = useState([]);

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState('')

    const handleSubmit  = (e) => {
        e.preventDefault()

        const newContact = {
            name: name,
            surname: surname,
            number: number,
            isDeleted: false,
            id: uuidv4()
        }

        setContactsNumbers([...allContacts, newContact])

        setName('');
        setSurname('');
        setNumber('');
    }

    console.log(allContacts);

    return (
        <Box component="form"
             sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
             noValidate
             autoComplete="off"

        >
            <TextField id="outlined-basic"
                       label="Name"
                       variant="outlined"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       slotProps={{
                           inputLabel: {
                               shrink: true,
                           },
                       }}/>
            <TextField
                id="outlined-basic"
                label="Surname"
                variant="outlined"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                }}/>
            <TextField
                id="outlined-number"
                label="Number"
                variant="outlined"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                }}
            />
            <Button variant="contained" type="submit" textButton="Add" onSubmit={handleSubmit}>Add</Button>
        </Box>
    )
}

export default AddContactForm