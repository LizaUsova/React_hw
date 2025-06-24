import React, {useState} from 'react';
import { ListItemText, Typography, ListItem, Button, ButtonGroup } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ContactItem({ contact, onDelete }) {

    return (
        <ListItem alignItems="flex-start">
            <ListItemText size={{ xs: 12 }}
                primary={contact.name + ' ' + contact.surname}
                secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                        >
                            {contact.number}
                        </Typography>
                }
            />
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button variant="outlined" onClick={() => onDelete(contact.id)}>
                    <DeleteIcon />
                </Button>
                <Button variant="outlined">
                    <EditIcon />
                </Button>
            </ButtonGroup>
        </ListItem>
 )
}

export default ContactItem

//дз - 1) mui подорать компонент для contactItem, отобразить все данные
// кнопку удаления без подтверждения
// редактирования кнопка => 1. модалка; 2. переисользовать форму добавления конакта для редактирования