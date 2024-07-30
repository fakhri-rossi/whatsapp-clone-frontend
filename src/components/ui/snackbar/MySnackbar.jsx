import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export default function MySnackbar({
  openBar,
  closeBar,
  message = "message here",
  type = "success",
}) {
  const [state, setState] = useState({
    horizontal: "center",
    vertical: "top",
  });

  const { horizontal, vertical } = state;

  const handleClose = () => {
    closeBar();
  };

  return (
    <div>
      <Snackbar
        open={openBar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}>
        <Alert
          onClose={handleClose}
          severity={type}
          variant="standard"
          sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
