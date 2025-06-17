import { Autocomplete, TextField } from '@mui/material';

function ContactSearch( {contacts} ) {
    return (
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            // options={contacts.map((option) => option.title)}
            renderInput={(params) => (
                <TextField
                    {...contacts}
                    label="Search input"
                    // InputProps={{
                    //     ...params.InputProps,
                    //     type: 'search',
                    // }}
                />
            )}
        />
    );
}

export default ContactSearch