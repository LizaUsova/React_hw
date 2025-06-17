import { useState } from 'react'
import {Box, Typography, Modal, Button} from "@mui/material";
import AddContactForm from "./AddContactForm.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function ContactItem() {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleDeleteOpen = () => setOpenDeleteModal(true);
    const handleDeleteClose = () => setOpenDeleteModal(false);

    const handleEditOpen = () => setOpenEditModal(true);
    const handleEditClose = () => setOpenEditModal(false);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between',gap: 2 }}>
            <Typography sx={{ pl: 1 }}>Item</Typography>

            <Box sx={{ display: 'flex'}}>
                <Button onClick={handleDeleteOpen}><DeleteIcon /></Button>
                <Button onClick={handleEditOpen}><EditIcon /></Button>
            </Box>
            {/* Delete Modal */}
            <Modal open={openDeleteModal} onClose={handleDeleteClose}>
                <Box sx={modalStyle}>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to delete the contact?
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <Button onClick={handleDeleteClose}>Yes</Button>
                        <Button onClick={handleDeleteClose}>Later</Button>
                    </Box>
                </Box>
            </Modal>

            {/* Edit Modal */}
            <Modal open={openEditModal} onClose={handleEditClose}>
                <Box sx={modalStyle}>
                    <AddContactForm />
                    <Button sx={{ mt: 2 }} onClick={handleEditClose}>Save</Button>
                </Box>
            </Modal>
        </Box>
    );
}

export default ContactItem