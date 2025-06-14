import {Box} from "@mui/material";

function ContactItem({ contact } ) {
    return (
        <Box sx={{
            fontSize: '1.2rem',
            m: 1,
            width: '30ch',
            '--Grid-borderWidth': '1px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
        }}
        >
            <h3>{contact}</h3>
        </Box>
    )
}

export default ContactItem