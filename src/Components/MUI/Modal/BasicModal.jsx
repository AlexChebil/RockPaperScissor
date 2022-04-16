import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import rulesSVG from "../../../Assets/image-rules.svg";

const style = {
  position: "absolute",
  top: "30%",
  left: "40%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "rgba(50,50, 50, 0.9)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  transform: "scale(1.35)",
};
const buttonStyle = {
  bgcolor: "rgba(100,100, 100, 0.2)",
  border: "2px solid #000",
  boxShadow: 24,
  marginLeft: "92.5%",
  marginTop: "4.5em",
  padding: "1em 2em",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={buttonStyle} onClick={handleOpen}>
        Rules
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <img src={rulesSVG} alt='' />
        </Box>
      </Modal>
    </div>
  );
}
