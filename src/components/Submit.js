import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const Submit = ({ open, onClose }) => {
  return (
    <Dialog className="" open={open} onClose={onClose}>
      <DialogTitle className="text-xl">Thank You!</DialogTitle>
      <DialogContent className="font-poppins">
        Thank you for submitting your request. Our team will review it and get
        back to you shortly. If you have any urgent concerns, feel free to
        contact us directly.
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Submit;
