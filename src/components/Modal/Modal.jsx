import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid2, Modal as ModalMUI } from '@mui/material';
import { useState } from 'react';

function Modal({ Form , btnText, style, variant }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <Box>
            <Button onClick={handleOpen} sx={style} variant={variant}>{btnText}</Button>
            <ModalMUI
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            >
                <Grid2 container sx={{ m: '2rem 3rem', backgroundColor: 'white'}}>
                    <Form closeForm={handleClose} />
                </Grid2>
            </ModalMUI>
        </Box>
    )
}

export default Modal